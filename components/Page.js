import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import * as gtag from '../lib/gtag';
import site from '../site';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const Page = ({ children }) => (
  <>
    <Head>
      <title>{site.title}</title>
      <meta charset="utf-8" />
      <meta name="google-site-verification" content="0BgT_TsweWIhDEE4h3osam_PDlXJdeNPhyVL2OpEkxA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={site.description} />
      <meta name="keywords" content={site.keywords} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={`${site.siteUrl}/static/favicons/graph.png`} />
      <link rel="apple-touch-icon" sizes="57x57" href="static/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="static/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="static/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="static/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="static/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="static/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="static/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="static/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="static/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="static/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="static/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="static/favicons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    {children}
  </>
);

export default Page;
