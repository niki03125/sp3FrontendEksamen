import { useEffect, useState } from 'react';

function Albums(){
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchAlbums(){
                const response = await fetch('/api/v1/albums');
                const data = await response.json();

                setAlbums(data);
            }
            fetchAlbums();
        }, []);


    return(
       <div>
            <h1>Alle albums</h1>
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
                        <tr key={albums.id}>
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