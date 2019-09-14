/** this shall be fit for displaying the category */
import React from 'react';
import {graphql} from "gatsby";
import BlockHeader from "../components/blocks/BlockHeader";
import NewsCard  from "../components/shared/NewsCard";
import Layout from "../components/layout";

//we are querying graphql without the useStaticQuery
export const query = graphql`
query($category:String!){
allContentfulDennisBlog(filter:{
    category:{
        eq:$category
    }
}){
    edges{
        node{
            title
            profile{
                file{
                    url
                }
            }
            id
            category
            writer
            publishedDate(formatString:"MMMM Do,YYYY")
        }
    }
  }
}`;
const News = (props) => {
     /** i want to loop throw the data of the elements in category */
     console.log(`available posts `,props.data.allContentfulDennisBlog.edges)
     const postsList = props.data.allContentfulDennisBlog.edges.map((edge,index) => {
            return (
                <NewsCard edge={edge} index={index} related={false}/>
            )
     });
     return (
         <Layout>
         <section className="news_category_holder">
             <div className="container">
                 <div className="row">
                     <div className="header col-sm-12 col-12">
                            <BlockHeader title={`${props.data.allContentfulDennisBlog.edges[0].node.category}`} />
                     </div>
                     {postsList}
                 </div>
             </div>
         </section>
         </Layout>
     )
};

export default News;
