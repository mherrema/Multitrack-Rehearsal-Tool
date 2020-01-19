import Layout from '../components/general/Layout';
import RecentlyAddedSongsList from '../components/song/list/recently-added/RecentlyAddedSongsList';
import Hero from '../components/hero/Hero';
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
        {/* <div className="row">
            <div className="col">
                <div className="hero hero--1 row">
                    <h1>Welcome to the Multitrack Rehearsal Tool</h1>
                </div>
            </div>
        </div> */}
        <Hero imageUrl="/images/hero-bg.jpg" text="Welcome to the Multitrack Rehearsal Tool"></Hero>
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