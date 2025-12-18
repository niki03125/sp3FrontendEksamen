import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
    const [artistName, setArtistName] = useState("");
    const [songs, setSongs] = useState([]);

    const mockSongs = [
  {
    id: 1,
    songName: "Midnight Echo",
    duration: "3:42",
    albumName: "City Lights",
    releaseYear: 2021,
  },
  {
    id: 2,
    songName: "Falling North",
    duration: "4:10",
    albumName: "City Lights",
    releaseYear: 2021,
  },
  {
    id: 3,
    songName: "Glass Horizon",
    duration: "5:01",
    albumName: "Reflections of a Dream",
    releaseYear: 2019,
  },
];

    const onSearch = (e) => {
        e.preventDefault();
        // fetch songs from API
        setSongs(mockSongs); //placeholder for fetched songs
    };

    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.head}>Songs by Artist:</h1>

            <form className={styles.form} onSubmit={onSearch}>
                <input
                    className={styles.input}
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Type an artist name..."
                    />
                    <button className={styles.button} type="subit">
                        Search
                    </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Song name</th>
                        <th>Duration</th>
                        <th>Album</th>
                        <th>Release year</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <tr key={song.id ?? `${song.songName}-${song.duration}-${song.albumName}-${song.releaseYear}`}>
                            <td>{song.songName}</td>
                            <td>{song.duration}</td>
                            <td>{song.albumName}</td>
                            <td>{song.releaseYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    );
};
export default Search;