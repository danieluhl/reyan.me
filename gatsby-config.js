const siteMetadata = {
  title: `duhl blog v4`,
  description: `Coding, management, meditation, and skepticism`,
  image: `/default-site-image.png`,
  siteUrl: `https://the-localhost-blog.netlify.com`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@danieluhl`,
  authorName: `Daniel Uhl`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {extensions: [`.mdx`, `.md`]},
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540,
          },
        },
      ],
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540,
          },
        },
      ],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
