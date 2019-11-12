export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcb0facfd600d018af08acf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3kwcorm3',
                  apiId: 'de68abb6-69d2-4e04-90c7-5525f8bc836d'
                },
                {
                  buildHookId: '5dcb0fad5922a6021008a1e1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fyc2rymi',
                  apiId: 'b2e35fc9-7ebc-4552-9568-b607b266461c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JonasAymoz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fyc2rymi.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
