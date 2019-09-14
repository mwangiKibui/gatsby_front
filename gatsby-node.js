// gatby's nodejs api's
const path = require('path');

module.exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions;
    const newsTemplate = path.resolve('./src/templates/news.js');
    const newsPageTemplate = path.resolve('./src/templates/newsPage.js');
    const res = await graphql(`
    query{
        news:allContentfulDennisBlog{
            edges{
                node{
                    category
                }
            }
        }
        newsPages:allContentfulDennisBlog{
            edges{
                node{
                    category
                    id
                }
            }
        }
    }
    `);
    //create the news pages
    res.data.news.edges.forEach(edge => {
    createPage({
        component:newsTemplate,
        path:`/news/${edge.node.category}`,
        context:{
            category:edge.node.category //we send over the category
        }
    })
    });

    //create the newsPage
    res.data.newsPages.edges.forEach(edge => {
        createPage({
            component:newsPageTemplate,
            path:`/news/${edge.node.category}/${edge.node.id}`,
            context:{
                id:edge.node.id,
                category:edge.node.category
            }
        })
    })

;};

