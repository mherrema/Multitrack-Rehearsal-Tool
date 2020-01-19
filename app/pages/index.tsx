import Layout from '../components/general/Layout';
import RecentlyAddedSongsList from '../components/song/list/recently-added/RecentlyAddedSongsList';
import HomeHero from '../components/hero/HomeHero';
import CSS from 'csstype';
import Link from 'next/link';


const h4Styles: CSS.Properties = {
    marginBottom: "2rem"
}

const allSongsButtonStyles: CSS.Properties = {
    marginTop: "1rem"
}



const Index = () => {



    return (<Layout>
        <HomeHero></HomeHero>
        <div className="container">
            <h4 style={h4Styles}>Recently Added Songs</h4>
            <RecentlyAddedSongsList />
            <Link href="/songs" as={`/songs`}>
                <a className="btn">See All Songs</a>
            </Link>
        </div>
    </Layout>)
}

export default Index;