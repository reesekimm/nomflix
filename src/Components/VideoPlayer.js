import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Container = styled.div`
  position: fixed;
  background-color: black;
  width: 80%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleSection = styled.div`
  .title {
    font-size: 20px;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #222f3e;
    font-size: 20px;
    text-align: center;
    vertical-align: center;
    cursor: pointer;
  }
`;

const VideoSection = styled.div`
position: absolute;
bottom: 0;
  width: 100%;
  .video {
    width: 100%;
    }
  }
`;

class VideoPlayer extends React.Component {
  state = {};

  render() {
    const { playingId, playingTitle, handleClose } = this.props;

    return (
      <Modal>
        <Container>
          <TitleSection>
            <span className="title">{playingTitle}</span>
            <div className="close" onClick={handleClose}>
              X
            </div>
          </TitleSection>
          <VideoSection>
            <div className="video">
              <iframe
                width="100%"
                height="540px"
                title={playingId}
                src={`https://www.youtube.com/embed/${playingId}?rel=0&autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoList"></div>
          </VideoSection>
        </Container>
      </Modal>
    );
  }
}

export default VideoPlayer;
