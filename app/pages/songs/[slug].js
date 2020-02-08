import { useRouter } from 'next/router';
import Layout from '../../components/general/Layout';
import SongPage from '../../components/song/SongPage';

export default function Song() {
    const router = useRouter();

    return (
        <Layout>
            <SongPage slug={router.query.slug}></SongPage>
        </Layout>
    );
}