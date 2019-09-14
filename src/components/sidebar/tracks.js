import React from 'react';
import BlockHeader from "../../components/blocks/BlockHeader";
import {graphql,useStaticQuery} from 'gatsby';
import '../../styles/components.css';

//we bring in the tracks



const Tracks = () =>  { 
    const data = useStaticQuery(graphql`
    query{
    tracks:allToptrack{
        edges{
            node{
                artist
                track_name
                album_name
                track_url
            }
        }
        }
    }`);
    const tracksList = data.tracks.edges.map((edge,index) => {
        return (
            <div className='media track-card' key={index}>
                <img className="mr-3" src="/images/record-label.png" alt="track__image" className="track__image"/>
                <div className="media-body">
                    <h5 className="mt-0">{edge.node.album_name}</h5>
                    <p className="text-muted">
                        {edge.node.track_name} by <span className="track__artist">{edge.node.artist}</span>
                    </p>
                </div>
            </div>
        )
    });

    return (            
        <div className="row tracks_card">
            <div className="header col-sm-12 col-12">
                <BlockHeader title="Top Tracks" />
            </div>
            <div className="content col-sm-12 col-12">
                {
                    tracksList
                }                 
            </div>
        </div>                    
    )    
}

export default Tracks;
