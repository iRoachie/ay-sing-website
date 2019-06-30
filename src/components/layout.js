import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import graph from '../images/favicons/graph.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, keywords, siteUrl },
      },
    }) => (
      <>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: description,
            },
            {
              name: 'google-site-verification',
              content: 'pgs8yb2f6M3YBWO9lhS0A36QB7A7uDi-pcMCdfaOIGw',
            },
            { name: 'keywords', content: keywords },
            { name: 'og:url', content: siteUrl },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            {
              name: 'og:image',
              content: graph,
            },
            {
              name: 'twitter:card',
              content: 'app',
            },
            {
              name: 'twitter:site',
              content: '@roach_iam',
            },
            {
              name: 'twitter:description',
              content: description,
            },
            {
              name: 'twitter:app:name:iphone',
              content: 'AY Sing',
            },
            {
              name: 'twitter:app:name:googleplay',
              content: 'AY Sing',
            },
            {
              name: 'twitter:app:id:iphone',
              content: '1200976617',
            },
            {
              name: 'twitter:app:id:ipad',
              content: '1200976617',
            },
            {
              name: 'twitter:app:id:googleplay',
              content: 'com.aysing',
            },
            {
              name: 'msapplication-TileColor',
              content: '#ffffff',
            },
            {
              name: 'msapplication-TileImage',
              content: require('../images/favicons/ms-icon-144x144.png'),
            },
            {
              name: 'theme-color',
              content: '#fff',
            },
          ]}
        >
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={require('../images/favicons/apple-icon-57x57.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={require('../images/favicons/apple-icon-60x60.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={require('../images/favicons/apple-icon-72x72.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require('../images/favicons/apple-icon-76x76.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={require('../images/favicons/apple-icon-114x114.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={require('../images/favicons/apple-icon-120x120.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={require('../images/favicons/apple-icon-144x144.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={require('../images/favicons/apple-icon-152x152.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require('../images/favicons/apple-icon-180x180.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('../images/favicons/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={require('../images/favicons/favicon-96x96.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('../images/favicons/favicon-16x16.png')}
          />
          <html lang="en" />
        </Helmet>

        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
