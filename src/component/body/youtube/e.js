import React, { useEffect, useState } from 'react';
import "./youtube.css";

function Youtube() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then((response) => response.json())
            .then((data) => {
                const the_data="https://www.googleapis.com/youtube/v3/search?key=AIzaSyDJga8mHxHW3FM86b8dXYrzWHLNOs2kKkI&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&part=snippet&type=video&order=date&maxResults=6";
                const youtubeVideosData = data.items;
                setVideos(youtubeVideosData);
                console.log(youtubeVideosData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            
            {videos.map((singleVideo, index) => {
                let videoId = singleVideo.id.videoId;
                let videoTitle = singleVideo.snippet.title;
                let videoDescription = singleVideo.snippet.description;
                let embedUrl = `https://www.youtube.com/embed/${videoId}`;
                return (
                    <div key={index} className="video-wrapper">
                        <div className="video-info">
                       
                           <iframe src={embedUrl} width="60px" height="400px" frameborder="0"></iframe>
                           <h1 className="video-title">{videoTitle}</h1>
                            <h2 className="video-description">{videoDescription}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Youtube;
