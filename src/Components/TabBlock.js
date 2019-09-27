import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import TabVideos from "./TabVideos";

const TabWrapper = styled.div``;

const Menu = styled.div``;

const Content = styled.div`
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 0 10px 0 0;
  padding: 20px;
  border: none;
`;

class TabBlock extends React.Component {
  constructor(props) {
    super(props);
    const {videos, series, production} = this.props;
    this.state = {
      active: "tab01",
      videos: videos,
      series: series,
      production: production
    };
  }

  render() {
    const { active, videos, series, production } = this.state;

    return (
      <TabWrapper>
        <Tabs active={active} onChange={active => this.setState({ active })}>
          <Menu key="tab01">Videos</Menu>
          <Menu key="tab02">Series</Menu>
          <Menu key="tab03">Production Info</Menu>
        </Tabs>
        <Content>
        {active === "tab01" && videos && videos.length > 0 && {videos.map(video => (<TabVideos thumbnail={video.key} title={video.name}/>))}}</Content>
      </TabWrapper>
    );
  }
}

export default TabBlock;
