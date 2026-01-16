import { useState, useEffect } from "react";
import {useSongs} from "../../hooks/UseSongs"

function Songs(){
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(null);

    useEffect (() =>{
        async function fetchSongs() {                                           //asynkron functionen
            try {
                setError(null);                                                 //null stiller gamle fejl
                 const response = await fetch('/api/v1/songs');                 //promis ved fetch
                 if(!response.ok){                                              // tjekker HTTP
                    throw new Error(`HTTP error status: ${response.status}`);   //kaster fejl 
                 }
                 const data = await response.json();                            //retunere også promise ogparser JSON
                 setSongs(data);                                                // opdatere state
            } catch (error) { 
                console.log(error);                                             // håntere  og logger fejl
                setError(error.message)
            }
        }
        fetchSongs();                                                           
        /*fetch("/api/v1/songs")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setSongs(data); // opdaterer state
      })
      .catch(error => {
        console.log(error); // håndterer fejl
      }); */
    }, []);                                                                     // tom dependensy array: køre kun en gang

    return(
        <>
        <div>
            <h1>Songs</h1>
            {error && <p style={{ color: "red" }}>{error}</p>} 

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        <th>Release date</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) =>(
                        <tr key = {song.songId}>
                            <td>{song.title}</td>
                            <td>{song.artistName}</td>
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