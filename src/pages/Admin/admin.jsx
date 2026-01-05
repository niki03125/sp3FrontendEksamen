import styles from "./admin.module.css";
import { useState,useEffect } from "react";

function Admin(){
    const [songCount, setSongCount] = useState(0);
    const [albumCount, setAlbumCount] = useState(0);
    const [artistCount, setArtistCount] = useState(0); /*ikke "= useState([]);" fordi useState skal være samme datatype som foventes senere */

    useEffect(() => {
        async function fetchCounts() {
            /* songs */
            const songResponse = await fetch("/api/v1/songs");
            const songData = await songResponse.json();
            setSongCount(songData.length);

            /*Albums*/
            const albumResponse = await fetch("/api/v1/albums");
            const albumData = await albumResponse.json();
            setAlbumCount(albumData.length);

            /* Artists */
            const artistResponse = await fetch("/api/v1/artist");
            const artistData = await artistResponse.json();
            setArtistCount(artistData.length);
        }
        fetchCounts();
    }, []);

    return(
        <>
        <h1 className= {styles.title}>Music Dashboard - Collection Summary</h1>

        <div className={styles.gridTable}>
            {/*header */}
            <div className={styles.gridHeader}> Catagory</div>
            <div className={styles.gridHeader}> Count</div>
            
            {/*rows */}
            <div className={styles.gridCell}>Songs</div>
            <div className={styles.gridCell}>{songCount}</div>

            <div className={styles.gridCell}>Albums</div>
            <div className={styles.gridCell}>{albumCount}</div>

            <div className={styles.gridCell}>Artists</div>
            <div className={styles.gridCell}>{artistCount}</div>
        </div>
        </>
    )

}
export default Admin;