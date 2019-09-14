import React from 'react';
import {useStaticQuery,graphql} from "gatsby";
import BlockHeader from "../blocks/BlockHeader";
import NewsCard from "../shared/NewsCard";

const News = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulDennisBlog{
            edges{
                node{
                    title
                    profile{
                        file{
                            url
                        }
                    }
                    writer
                    id
                    category
                    publishedDate(formatString:"MMMM Do,Y")
                }
            }
        }
    }

`);
    const postsList = data.allContentfulDennisBlog.edges.map((edge, index) => {
        return (
            <NewsCard key={index} edge={edge}/>
        )
    })
    return (
        <section className="col-sm-12 col-12 newsContainer">
                <div className="row">
                <div className="header col-sm-12 col-12 mb-10">
                    <BlockHeader title="Latest Articles" />
                </div>
                {
                    postsList
                }
        </div>
        </section>
    )
};
 


export default News;