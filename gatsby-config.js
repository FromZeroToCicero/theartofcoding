module.exports = {
  siteMetadata: {
    title: "The Art of Coding",
    description:
      "The Art of Coding is an online community of web professionals. We enjoy sharing our love for creating incredible internet things. Learn Web Design & Development with our tutorials, courses and books - HTML5, CSS3, JavaScript, PHP, mobile app development, Responsive Web Design.",
    author: "Mircea Sima",
    image: "/images/defaultImg.jpeg",
    // siteUrl: "https://fromzerotocicero-backroads.netlify.com",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "src/posts",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
  ],
}
