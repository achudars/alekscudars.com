import { useState, useEffect } from "react";

/**
 * LastUpdated - A reusable component that shows when a file was last updated
 * Uses pre-generated timestamps created during build time
 *
 * @param {Object} props - Component properties
 * @param {string} props.filePath - Path to the file relative to project root (e.g., 'pages/running-and-training.js')
 * @param {string} props.className - Optional CSS class name(s) for styling
 * @returns {JSX.Element} - The Last Updated component
 */
const LastUpdated = ({ filePath, className = "" }) => {
  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    async function fetchLastUpdated() {
      try {
        // Extract just the filename from the path
        const fileName = filePath.split('/').pop();

        // Fetch the pre-generated JSON file with all last updated dates
        const response = await fetch('/last-updated-dates.json');

        // Check if response is ok before parsing JSON
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();

        // Check if response is empty or not valid JSON
        if (!text || text.trim() === '') {
          throw new Error('Empty response received');
        }

        // Parse JSON with additional error handling
        let data;
        try {
          data = JSON.parse(text);
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          console.error('Response content:', text.substring(0, 100) + '...');
          throw new Error('Invalid JSON response');
        }

        // Verify data is an object
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data format');
        }

        if (data[fileName]) {
          const date = new Date(data[fileName]);

          // Validate date is valid
          if (isNaN(date.getTime())) {
            throw new Error('Invalid date value');
          }

          setLastUpdated(date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }));
        } else {
          setLastUpdated("Unknown");
        }
      } catch (error) {
        console.error(`Failed to fetch last updated date for ${filePath}:`, error);
        setLastUpdated("Unknown");
      }
    }

    fetchLastUpdated();
  }, [filePath]);

  return (
    <p
      className={`subtitle ${className}`}
      aria-label={`Content was last updated on: ${lastUpdated}`}
    >
      Last updated: {lastUpdated}
    </p>
  );
};

export default LastUpdated;
