import Layout from '../components/MyLayout';
import Link from 'next/link';

function graphql(query, variables = {}) {
    return fetch('http://localhost:3000/admin/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            variables,
            query,
        }),
    }).then(function (result) {
        return result.json();
    });
}

const GET_SONGS = `
    query GetSongs {
      allSongs {
        title
      }
    }
  `;

const Index = props => (
    <Layout>
        <h1>Songs</h1>
        <ul>
            {props.shows.map(show => (
                <pre>{show.title}</pre>
                // <li key={show.id}>
                //     <Link href="/p/[id]" as={`/p/${show.id}`}>
                //         <a>{show.name}</a>
                //     </Link>
                // </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function () {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();

    // console.log(`Show data fetched. Count: ${data.length}`);

    const data = await graphql(GET_SONGS)
        .then(function (result) {
            console.log("***********************************");
            console.log(result.data);
            console.log("***********************************");
            // Clear any existing elements from the list
            // document.querySelector('.results').innerHTML = '';

            // Recreate the list and append it to the .results div
            // const list = createList(result.data);
            return result.data;
            // document.querySelector('.results').appendChild(list);
        })
        .catch(function (error) {
            console.log(error);
            // document.querySelector('.results').innerHTML = '<p>Error</p>';
        });

    return {
        shows: data.allSongs
    };
};

export default Index;