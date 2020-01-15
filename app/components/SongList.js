import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const ALL_SONGS = gql`
  {
        allSongs {
            title
        }
     }
`;


const SongList = () => {
    const { loading, error, data } = useQuery(ALL_SONGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {
        console.log(data);
    }
    return (
        <div>
            {data.allSongs.map(show => (
                <pre>{show.title}</pre>
            ))}
        </div>
    )
};

export default SongList;