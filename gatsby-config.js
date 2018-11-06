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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
