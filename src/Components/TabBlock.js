import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import TabVideos from "./TabVideos";
import TabSeries from "./TabSeries";
import TabProd from "./TabProd";
import VideoPlayer from "./VideoPlayer";

const TabWrapper = styled.div``;

const Menu = styled.div``;

const Content = styled.div`
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 0 10px 0 0;
  padding: 20px;
  border: none;
  height: fit-content;
`;

const VideoBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SeriesBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProdBlock = styled.div``;

class TabBlock extends React.Component {
  constructor(props) {
    super(props);
    const { videos, series, production, isMovie } = this.props;
    this.state = {
      active: "tab01",
      videos: videos,
      series: series,
      production: production,
      isMovie: isMovie,
      videoPlayer: false,
      playingId: null,
      playingTitle: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.production !== nextProps.production
      ? {
          active: "tab01",
          videos: nextProps.videos,
          series: nextProps.series,
          production: nextProps.production
        }
      : null;
  }

  showVideoPlayer = e => {
    let clickedId = e.target.parentNode.id;
    let clickedTitle = e.target.parentNode.title;
    this.setState({
      playingId: clickedId,
      playingTitle: clickedTitle,
      videoPlayer: true
    });
  };

  hideVideoPlayer = () => this.setState({ videoPlayer: false });

  render() {
    const {
      active,
      videos,
      series,
      production,
      isMovie,
      videoPlayer,
      playingId,
      playingTitle
    } = this.state;

    return (
      <>
        <TabWrapper>
          <Tabs active={active} onChange={active => this.setState({ active })}>
            {videos && videos.length > 0 && <Menu key="tab01">Videos</Menu>}
            {series && series.length > 0 && <Menu key="tab02">Series</Menu>}
            {production && production.length > 0 && (
              <Menu key="tab03">Production Info</Menu>
            )}
          </Tabs>
          <Content>
            {active === "tab01" && (
              <VideoBlock>
                {videos.map(item => (
                  <TabVideos
                    key={item.key}
                    thumbnail={item.key}
                    title={item.name}
                    handleShow={this.showVideoPlayer}
                  />
                ))}
              </VideoBlock>
            )}
            {active === "tab02" && (
              <SeriesBlock>
                {series.map(item => (
                  <TabSeries
                    key={item.id}
                    isMovie={isMovie}
                    id={item.id}
                    posUrl={item.poster_path}
                    title={item.original_title || item.name}
                  />
                ))}
              </SeriesBlock>
            )}
            {active === "tab03" && (
              <ProdBlock>
                {production.map(item => (
                  <TabProd key={item.id} title={item.name} />
                ))}
              </ProdBlock>
            )}
          </Content>
        </TabWrapper>
        {videoPlayer && (
          <VideoPlayer
            playingId={playingId}
            playingTitle={playingTitle}
            handleClose={this.hideVideoPlayer}
          />
        )}
      </>
    );
  }
}

export default TabBlock;
