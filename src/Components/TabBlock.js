import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

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
    console.log(props);
    this.state = {
      active: "tab01"
    };
  }

  render() {
    const content = {
      tab01: "Hello",
      tab02: "This is",
      tab03: "Practice"
    };
    return (
      <TabWrapper>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({ active })}
        >
          <Menu key="tab01">Videos</Menu>
          <Menu key="tab02">Series</Menu>
          <Menu key="tab03">Production Info</Menu>
        </Tabs>
        <Content>{content[this.state.active]}</Content>
      </TabWrapper>
    );
  }
}

export default TabBlock;
