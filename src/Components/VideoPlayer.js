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
  width: 62%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleSection = styled.div`
  height: 50px;
  .title {
    display: flex;
    height: 32px;
    align-items: center;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 15px;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    opacity: 0.5;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: white;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
`;

const VideoSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  .video {
    width: 100%;
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
            <div className="close" onClick={handleClose}></div>
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
