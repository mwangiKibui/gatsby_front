import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import "../styles/components.css";
import BlockHeader from "../components/blocks/BlockHeader";
import NewsCard from "../components/shared/NewsCard";

export const query = graphql`
query($id:String!,$category:String!){
    singlePost:contentfulDennisBlog(id:{eq:$id}){
        title
        writer
        publishedDate(formatString:"MMMM Do,YYYY")
        body{
            json
        }
    }
    relatedPosts:allContentfulDennisBlog(filter:{category:{eq:$category},id:{ne:$id}}){
        edges{
            node{
                title
                profile{
                    file{
                        url
                    }
                }
                category
                id
                writer
                publishedDate(formatString:"MMMM Do,YYYY")
            }
        }
    }
}`;


const NewsPage = (props) => {
    const options = {
        renderNode:{ //a func for returning the images
            "embedded-asset-block":(node) => {
                    const alt = node.data.target.fields.title['en-US'];
                    const url = node.data.target.fields.file['en-US'].url;
                    return (
                    <img alt={alt} src={url} className="newsPage__image"/>
                    )
            }
        }
    }

   return (
       <Layout>
         <div className="newsPage">
             <div className="newsPage__content">
             <div className="col-sm-12 col-12">
                 <div className="newsPage__heading">
                       <h2>
                           {props.data.singlePost.title}
                       </h2>
                 </div>
                 <div className="newsPage__sub_heading">
                     <p className="text-muted">
                         Published by {props.data.singlePost.writer} on {props.data.singlePost.publishedDate}
                     </p>
                 </div>
                 <div className="page_body">
                   {
                       documentToReactComponents(props.data.singlePost.body.json,options) // options is passed as the second parameter
                   }
                 </div>
             </div>
            </div>
            {
                props.data.relatedPosts.edges.length ? (
                       <div className="newsPage__related_posts">
                           <div className="header col-sm-12 col-12">
                               <BlockHeader title="Related Posts" />
                           </div>
                           <div className="row">
                               {
                                   props.data.relatedPosts.edges.map((edge, index) => {
                                       return (
                                           <NewsCard key={index} edge={edge} related={true}/>
                                       )
                                   })
                               }
                           </div>
                       </div>
                ) : null
            }
            
         </div>
       </Layout>
   )
};
export default NewsPage;
