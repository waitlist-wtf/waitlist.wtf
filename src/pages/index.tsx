import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Script from 'next/script';
import NewsLetterSignUpForm from '../components/form';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Waitlist.wtf</title>
        <meta
          name="description"
          content="join all ai product waitlist by one click"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wait.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HLPJZF3XF1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HLPJZF3XF1');`,
          }}
        ></script>
      </Head>
      <main
        className={styles.main}
        style={{
          margin: '0 auto',
          padding: '0',
        }}
      >
        <div
          className={styles.description}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '0 auto',
            padding: '0',
          }}
        >
          <h1
            style={{
              marginBottom: '10px',
              textAlign: 'center',
              marginTop: '100px',
            }}
          >
            <Text
              h1
              size={30}
              css={{
                textGradient: '45deg, $yellow600 30%, $red600 60%',
              }}
              weight="bold"
            >
              waitlist.wtf
            </Text>
            <Text
              h1
              size={40}
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              weight="bold"
            >
              Join all AI product waitlist in one place
            </Text>
          </h1>
          <NewsLetterSignUpForm />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              margin: '40px 0',
            }}
          >
            <a
              href="https://github.com/0xYootou/waitlist.wtf"
              style={{}}
              target="_blank"
            >
              <Tooltip content="Github code" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z"
                    fill="#040000"
                  ></path>
                </svg>
              </Tooltip>
            </a>
            <a
              href="https://twitter.com/intent/retweet?tweet_id=1639232387354853377"
              target="_blank"
            >
              <Tooltip content="Share on Twitter" color={'success'}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                >
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m215.3 337.7c0.3 4.7 0.3 9.6 0.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2-50.8-10.3-88.9-55-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1-30.9-20.6-49.5-55.3-49.5-92.4 0-20.7 5.4-39.6 15.1-56 54.7 67.4 136.9 111.4 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
                    fill="#1296DB"
                  ></path>
                </svg>
              </Tooltip>
            </a>
          </div>
        </div>
        <Toaster />
        <div
          style={{
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '100px',
          }}
        >
          <div
            style={{
              color: '#333',
              fontWeight: 'bold',
              fontSize: '18px',
              lineHeight: '50px',
            }}
          >
            Or try our other product
          </div>
          <a href="https://chrome.google.com/webstore/detail/chatgpt-anywhere-chat-on/jcfkfnhebnhaldhlgfiaglpcjkdikbhc?hl=zh-CN&authuser=1">
            <img src="/ad.png" alt="chrome" width={'200px'} />
          </a>
        </div>
      </main>
    </>
  );
}
