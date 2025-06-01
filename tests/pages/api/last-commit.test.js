import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import handler from '../../../pages/api/last-commit';
import { exec } from 'child_process';
import path from 'path';

// Mock child_process.exec
vi.mock('child_process', () => ({
  exec: vi.fn()
}));

describe('last-commit API endpoint', () => {
  // Mock response object
  let mockRes;

  // Mock request object
  const mockReq = {
    query: {}
  };

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Setup mock response with jest spies
    mockRes = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };

    // Reset the request query
    mockReq.query = {};
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should return 400 if file parameter is missing', async () => {
    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid file parameter' });
  });

  it('should return 400 if file parameter contains directory traversal attempt', async () => {
    mockReq.query.file = '../some/path';

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid file parameter' });
  });

  it('should return 400 if file parameter contains invalid characters', async () => {
    mockReq.query.file = 'file;with&bad$chars';

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid file parameter' });
  });

  it('should return 200 with date when git command succeeds', async () => {
    mockReq.query.file = 'pages/running-and-training.js';

    // Mock successful exec call
    exec.mockImplementation((cmd, callback) => {
      callback(null, '2025-06-01T10:00:00+00:00\n', '');
    });

    await handler(mockReq, mockRes);

    expect(exec).toHaveBeenCalledWith(
      expect.stringContaining('git log -1 --format=%cd --date=iso'),
      expect.any(Function)
    );
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ date: '2025-06-01T10:00:00+00:00' });
  });

  it('should return 404 when no commit history is found', async () => {
    mockReq.query.file = 'pages/nonexistent-file.js';

    // Mock exec with empty stdout
    exec.mockImplementation((cmd, callback) => {
      callback(null, '', '');
    });

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'No commit history found' });
  });

  it('should return 500 when git command fails', async () => {
    mockReq.query.file = 'pages/running-and-training.js';

    // Mock exec with an error
    const mockError = new Error('Command failed');
    exec.mockImplementation((cmd, callback) => {
      callback(mockError, '', 'fatal: not a git repository');
    });

    // Mock console.error
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Failed to get commit date' });
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Error executing git command'));

    consoleErrorSpy.mockRestore();
  });

  it('should log stderr output when present but still return 200 if command succeeds', async () => {
    mockReq.query.file = 'pages/running-and-training.js';

    // Mock exec with stderr but still successful
    exec.mockImplementation((cmd, callback) => {
      callback(null, '2025-06-01T10:00:00+00:00\n', 'warning: some git warning');
    });

    // Mock console.error
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ date: '2025-06-01T10:00:00+00:00' });
    expect(consoleErrorSpy).toHaveBeenCalledWith('Git command stderr: warning: some git warning');

    consoleErrorSpy.mockRestore();
  });

  it('should return 500 when an unexpected exception occurs', async () => {
    mockReq.query.file = 'pages/running-and-training.js';

    // Mock exec to throw an error
    exec.mockImplementation(() => {
      throw new Error('Unexpected error');
    });

    // Mock console.error
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    await handler(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error' });
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error:', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });
});
