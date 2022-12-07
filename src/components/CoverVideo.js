import React from "react";
import styled from "styled-components";
import GifVideo from "../assets/home.mp4";

const VideoContainer = styled.div`
  width: 80%;
  margin-bottom: 100px; //responsiveyi bozarsa kaldır//

  video {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GifVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
