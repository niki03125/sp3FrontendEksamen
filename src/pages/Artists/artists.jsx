import { useState, useEffect } from "react";
import styles from "./artists.module.css"

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const APIURL = "https://music.codedbyniki.dk/api/v1/artist"; {/*https://music.codedbyniki.dk/api/v1/artist/  http://localhost:7071/api/v1/artist */}

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtists(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Artists:</h1>
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Fans</th>
            <th>Albums</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id}>
              <td>{artist.name}</td>
              <td>{artist.fanAmount}</td>
              <td>{artist.albumAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Artists;
