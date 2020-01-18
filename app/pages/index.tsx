import Layout from '../components/MyLayout';
import Link from 'next/link';
import SongList from '../components/SongList';


const Index = () => {

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    return (<Layout>
        <h1>Songs</h1>
        <SongList></SongList>
        {/* <ul>
            {data.shows.map(show => (
                <pre>{show.title}</pre>
                // <li key={show.id}>
                //     <Link href="/p/[id]" as={`/p/${show.id}`}>
                //         <a>{show.name}</a>
                //     </Link>
                // </li>
            ))}
        </ul> */}
        <style jsx global>{`
        body {
            margin: 0;
        }
      `}</style>
    </Layout>)
}

export default Index;