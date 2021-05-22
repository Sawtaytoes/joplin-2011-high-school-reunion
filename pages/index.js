import Head from 'next/head';
import { Fragment } from 'react';
import ContentGap from './ContentGap';
import Date from './Date';
import Hero from './Hero';
import Rsvp from './Rsvp';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <ContentGap />
      <Date />
      <ContentGap />
      <Rsvp />
    </Fragment>
  );
}
