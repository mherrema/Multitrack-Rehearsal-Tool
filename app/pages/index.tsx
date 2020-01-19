import Layout from '../components/Layout';
import RecentlyAddedSongsList from '../components/song/RecentlyAddedSongsList';
import Hero from '../components/hero/Hero';
import CSS from 'csstype';

const h4Styles: CSS.Properties = {
    marginBottom: "2rem"
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
        <Hero></Hero>
        <div className="container">
            <h4 style={h4Styles}>Recently Added Songs</h4>
            <RecentlyAddedSongsList />
            <button className="btn" >See All Songs</button>
        </div>
    </Layout>)
}

export default Index;