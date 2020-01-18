import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import SongPage from '../../components/SongPage';

export default function Song() {
    const router = useRouter();

    return (
        <Layout>
            <SongPage slug={router.query.slug}></SongPage>
        </Layout>
    );
}