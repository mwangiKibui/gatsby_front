/** we shall be hosting the slider from here */
import React from 'react';
import Slider from "react-slick";
import {slickSettings as settings} from "../../data";
import {graphql,useStaticQuery,Link} from 'gatsby';
import {FaClock} from "react-icons/fa";

const Home = () =>  {
    /** we can query the data we want in our graphql */
    const data = useStaticQuery(graphql`
    query{
        allContentfulDennisBlog(limit:4){
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
                    publishedDate(formatString:"MMMM Do,YYYY")
                }
            }
        }
    }
    `);
    const slides_list = data.allContentfulDennisBlog.edges.map((edge,index) => {
        return (
            <div className="slideshow_container" key={index}>                    
                    <div className="slideshow__container_image" style={{
                        backgroundImage:`url(${edge.node.profile.file.url})`
                    }}>
                    <div className="slideshow__container__inner">
                    <div className="slideshow__content">
                        <Link to={`/news/${edge.node.category}/${edge.node.id}`}>
                            <h4 className="slideshow__content_heading">
                                {edge.node.title}
                            </h4>
                        </Link>
                        <p className="text-white">
                        <FaClock /> {edge.node.publishedDate}
                        </p>
                    </div>
                    </div>
                    </div>
                    
            </div>
        )
    })
        return (
            <div className="col-12">
                    <div className="slideshow">
                            <Slider {...settings}>{slides_list}</Slider>
                    </div>
            </div>
        )
    };

export default Home;
