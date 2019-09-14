/** we send an ajax request to an external api */
/** create a graphql node */
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  let result = await axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?
    chart_name=top&page=1&page_size=5&country=ke&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`).catch(console.log);
  let tracks = result.data.message.body.track_list;
  tracks.map((track,index) => {
    const trackNode = {
        //required
        id:`${index}`,
        parent:`__SOURCE__`,
        internal:{
          type:'Toptrack'
        },
        children:[],
        //other fields
        artist:track['track'].artist_name,
        track_name:track['track'].track_name,
        track_url:track['track'].track_share_url,
        album_name:track['track'].album_name,
        updated_time:track['track'].updated_name
        //can add more if needed        
      }
    const contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(trackNode))
        .digest(`hex`)
    //add it to the node
    trackNode.internal.contentDigest = contentDigest;
    //create the node with gatsby api
    createNode(trackNode);
  })
  return 
};

