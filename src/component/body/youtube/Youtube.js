import React, { useEffect, useState } from 'react';
import "./youtube.css";

function Youtube() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnbJWq8tk_lUxje0vwcs0PYC-sDi94R40&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&type=video&order=date&maxResults=9")
            .then((response) => response.json())
            .then((data) => {
                if (data.items) { // Check if items exist
                    const youtubeVideosData = data.items;
                    setVideos(youtubeVideosData);
                    console.log(youtubeVideosData);
                } else {
                    console.error(data.error.message);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    

    return (
        <div className='video-wrapper'>
            {videos.length > 0 ? ( // Check if there are videos before mapping
                videos.map((singleVideo, index) => {
                    let videoId = singleVideo.id.videoId;
                    let videoTitle = singleVideo.snippet.title;
                    let videoDescription = singleVideo.snippet.description;
                    let baner = singleVideo.snippet.thumbnails.high.url;
                    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
                    return (
                        <div key={index} className="singlvideo">
                            <div className="thelink">
                                <a href={embedUrl} className='banerimag'>
                                    <img src={baner} alt="baner" className='banerimag' />
                                </a>
                            </div>
                            <h2 className='videotitle'>{videoTitle}</h2>
                            <hr />
                            <h3 className='videodiscription'>{videoDescription}</h3>
                        </div>
                    );
                })
            ) : (
                <p>No videos available</p> 
            )}
        </div>
    );
    
}

export default Youtube;
