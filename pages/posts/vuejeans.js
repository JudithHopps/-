
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Vue () {
    return (
    <Layout vue>
        <Head>
            <title>   뷰진스  </title>
        </Head>
        <h4>뷰 하고 있는 뉴진스 토끼</h4>
    </Layout>)
}