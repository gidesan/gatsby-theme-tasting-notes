module.exports = {
  siteMetadata: {
    title: "My Tasting Notes",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "TastingNote",
      },
    },
  ],
}
