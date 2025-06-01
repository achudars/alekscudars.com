// Get the last Git commit date for a specified file
import { exec } from 'child_process';
import path from 'path';

export default async function handler(req, res) {
  const { file } = req.query;

  // Basic validation to prevent directory traversal attacks
  if (!file || file.includes('..') || !file.match(/^[a-zA-Z0-9\/\._-]+$/)) {
    return res.status(400).json({ error: 'Invalid file parameter' });
  }

  // Get the file's absolute path - relative to project root
  const filePath = path.join(process.cwd(), file);

  try {
    // Execute git command to get the last commit date for the specific file
    exec(
      `git log -1 --format=%cd --date=iso ${filePath}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing git command: ${error}`);
          return res.status(500).json({ error: 'Failed to get commit date' });
        }

        if (stderr) {
          console.error(`Git command stderr: ${stderr}`);
        }

        const date = stdout.trim();

        if (!date) {
          return res.status(404).json({ error: 'No commit history found' });
        }

        return res.status(200).json({ date });
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
