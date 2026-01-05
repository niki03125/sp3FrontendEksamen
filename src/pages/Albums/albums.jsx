import { useEffect, useState } from 'react';

function Albums(){
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAlbums(){
            try {
                const response = await fetch('/api/v1/albums');
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                setAlbums(data);
                setError(null);
            } catch (e) {
                console.error('Failed to fetch albums', e);
                setError(e.message || 'Unknown error');
            }
        }
        fetchAlbums();
    }, []);


    return(
       <div>
            <h1>Alle albums</h1>
          {error && <div style={{color: 'red', marginBottom: '1rem'}}>Fejl ved hentning af albums: {error}</div>}
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Release date</th>
                        <th>Kunster navn</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album) => (
                        <tr key={album.id}>
                            <td>{album.title}</td>
                            <td>{album.releaseDate.substring(0, 4)}</td>
                            <td>{album.name}</td>
                            <td>{album.genre.data.map(g => g.name).join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </div>
    )

}
export default Albums;