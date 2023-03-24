import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Script from 'next/script';
import NewsLetterSignUpForm from '../components/form';
import { Toaster } from 'react-hot-toast';

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
              marginBottom: '40px',
              textAlign: 'center',
              marginTop: '100px',
            }}
          >
            Join all AI product waitlist in one place
          </h1>
          <NewsLetterSignUpForm />

          <a
            href="https://github.com/0xYootou/waitlist.wtf"
            style={{
              marginTop: '40px',
            }}
            target="_blank"
          >
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
          </a>
        </div>
        <Toaster />
        <div
          style={{
            width: '300px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              marginTop: '80px',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Working Progress
          </div>
          <div
            style={{
              margin: '20px 0',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            <div>
              <span
                style={{
                  color: '#333',
                  fontSize: '16px',
                }}
              >
                Step 1 (done):
              </span>
            </div>
            <div
              style={{
                color: '#999',
                fontSize: '16px',
              }}
            >
              2023-03-24
            </div>
            <div
              style={{
                color: '#666',
                fontSize: '16px',
              }}
            >
              Make code opensource...
            </div>
          </div>
          <div
            style={{
              margin: '20px 0',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            <div>
              <span
                style={{
                  color: '#333',
                  fontSize: '16px',
                }}
              >
                Step 2:
              </span>
            </div>
            <div
              style={{
                color: '#999',
                fontSize: '16px',
              }}
            >
              2023-03-25
            </div>
            <div
              style={{
                color: '#666',
                fontSize: '16px',
              }}
            >
              Start project and collecting requirements...
            </div>
          </div>

          <div
            style={{
              margin: '20px 0',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            <div>
              <span
                style={{
                  color: '#333',
                  fontSize: '16px',
                }}
              >
                Step 3:
              </span>
            </div>
            <div
              style={{
                color: '#999',
                fontSize: '16px',
              }}
            >
              2023-03-25
            </div>
            <div
              style={{
                color: '#666',
                fontSize: '16px',
              }}
            >
              Collect products that need a waitlist...
            </div>
          </div>
          <div
            style={{
              margin: '20px 0',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            <div>
              <span
                style={{
                  color: '#333',
                  fontSize: '16px',
                }}
              >
                Step 4:
              </span>
            </div>
            <div
              style={{
                color: '#999',
                fontSize: '16px',
              }}
            >
              ...
            </div>
            <div
              style={{
                color: '#666',
                fontSize: '16px',
              }}
            >
              ...
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
