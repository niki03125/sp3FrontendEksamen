import { useState, useEffect } from "react";
import styles from "./songs.module.css"
function Songs(){
    const [songs, setSongs] = useState([]);

    useEffect (() =>{
        async function fetchSongs() {
            const response = await fetch('/api/v1/songs'); 
            const data = await response.json();
            setSongs(data);
        }
        fetchSongs;  
    }, []);  

    return(
        <>
        <div>
            <h1 className={styles.title}>Songs</h1>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Duration</th>
                        <th>Release date</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) =>(
                        <tr key = {songs.id}>
                            <td>{song.title}</td>
                            <td>{song.artistName}</td>
                            <td>{song.albumId}</td>
                            <td>{song.duration}</td>
                            <td>{song.releaseDate.substring(0, 4)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )

}
export default Songs;