import { useRouter } from 'next/router';
import Layout from '../../components/general/Layout';
import Page from '../../components/general/Page';

export default function Song() {
    const router = useRouter();

    return (
        <Layout>
            <Page slug={router.query.slug}></Page>
        </Layout>
    );
}