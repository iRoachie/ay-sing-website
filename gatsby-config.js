module.exports = {
  siteMetadata: {
    title: 'AY Sing - The Advent Youth Sing',
    description:
      'AY Sing brings all 214 songs from the Advent Youth Sing right into your hands. With apps for both phone and tablet - everyone gets to enjoy the cheerful songs of the Advent Youth Sing.',
    keywords:
      'sda, hymnal, youth, advent, sing, advent youth sing, ay sing, church, ay, adventist',
    siteUrl: 'https://aysing.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AY Sing - The Advent Youth Sing',
        short_name: 'AY Sing',
        start_url: '/',
        background_color: '#1a3158',
        theme_color: '#1a3158',
        display: 'minimal-ui',
        icon: 'src/images/aysing-icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-80535053-2',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
}
