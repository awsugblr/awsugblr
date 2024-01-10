module.exports = {
  siteMetadata: {
    title: 'AWS Users Group, Bengaluru {AWSUGBLR}',
    description: `AWS Users Group Bengaluru Blog`,
    siteUrl: `http://awsugblr.in/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              // width: 720,
              // height: 405,
              // related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              //noIframeBorder: false, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              //containerClass: 'embedVideo-container' //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: []
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
