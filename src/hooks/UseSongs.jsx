import { useState, useEffect } from "react";

export function useSongs() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch("/api/v1/songs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } 
      
    }
    fetchSongs();
  }, []);

  return { songs, error };
}