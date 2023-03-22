import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import HomeStyles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[React Jeans]</p>
        <p>
          리액트를 하고 있는 뉴진스 토끼이다.{' '}
        </p>
        <br></br>
        
      </section>
      
      <div className={HomeStyles.grid}>
        <h3>또 다른 개발진스 보기</h3>
        <Link href='/posts/vuejeans' className={HomeStyles.card}>
           
            <h3>뷰진스 &rarr;</h3> 
            <p>뷰 하고 있는 뉴진스 토끼</p>
            
            
        </Link>
      
        <Link href='/posts/angjeans' className={HomeStyles.card}>
            <h3>앵진스 &rarr;</h3> 
            <p>앵귤러 하고 있는 뉴진스 토끼</p>
        </Link>

        <Link href='/posts/hjeans' className={HomeStyles.card}>
            <h3>h진스 &rarr;</h3> 
            <p>html 하고 있는 뉴진스 토끼</p>
        </Link>
       
      </div>
    </Layout>
  );
}