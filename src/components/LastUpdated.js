import { useState, useEffect } from "react";

/**
 * LastUpdated - A reusable component that shows when a file was last updated in Git
 *
 * @param {Object} props - Component properties
 * @param {string} props.filePath - Path to the file relative to project root (e.g., 'pages/running-and-training.js')
 * @param {string} props.className - Optional CSS class name(s) for styling
 * @returns {JSX.Element} - The Last Updated component
 */
const LastUpdated = ({ filePath, className = "" }) => {
  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    // Fetch last commit date for this file
    fetch(`/api/last-commit?file=${filePath}`)
      .then(response => response.json())
      .then(data => {
        if (data.date) {
          const date = new Date(data.date);
          setLastUpdated(date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }));
        } else {
          setLastUpdated("Unknown");
        }
      })
      .catch(error => {
        console.error(`Failed to fetch last commit date for ${filePath}:`, error);
        setLastUpdated("Unknown");
      });
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
