// Vendors
import React from 'react';

// Next
import Head from 'next/head';
import Link from 'next/link';

export default function Home({ appName }) {
  return (
    <>
      <Head>
        <title>Welcome - {appName}</title>
      </Head>
      <div className="container">
        <main>
          <h1 className="title">Qasir Boilerplate</h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid">
            <a
              href="https://github.com/qasir-id/Qasir-React-Boilerplate/blob/master/js/dashboard/README.md"
              className="card"
              target="_blank"
            >
              <h3>Learn &rarr;</h3>
              <p>Learn about Qasir react boilerplate structure.</p>
            </a>

            <Link href="/auth/login">
              <a className="card">
                <h3>Examples &rarr;</h3>
                <p>Discover layout dashboard with components.</p>
              </a>
            </Link>
          </div>
        </main>

        <footer>
          <a href="https://www.qasir.id/" target="_blank" rel="noopener noreferrer">
            Powered by <img src="/img/logo/qasir.svg" alt="Qasir Logo" className="logo" />
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            user-select: none;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            margin-top: 10px;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
              Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            background-color: #ffffff;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #f04b32;
            border-color: #f04b32;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          footer a {
            font-size: 1.4rem;
            user-select: none;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </>
  );
}
