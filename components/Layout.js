import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = '리진스';
export const siteTitle = '개발진스';

export default function Layout({ children, home ,vue,angular }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/리진스.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (vue ? (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/뷰진스.jpg"
                className={utilStyles.borderCircle}
                height={400}
                width={400}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.heading2Xl}>
                뷰진스
            </h2>
          </>
        ) : angular ? (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/앵진스.jpg"
                  className={utilStyles.borderCircle}
                  height={400}
                  width={400}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.heading2Xl}>
                  앵진스
              </h2>
            </>
          ) :(
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/h진스.jpg"
                  className={utilStyles.borderCircle}
                  height={400}
                  width={400}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.heading2Xl}>
                  h진스
              </h2>
            </>
          )  ) }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">리진스 보러 가기</Link>
        </div>
      )}
    </div>
  );
}