import React from "react";
import styled from "styled-components";

const TabNav = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Tab = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 7px 7px 0 0;
  background-color: ${props =>
    props.active ? "rgba(225, 225, 225, 0.5);" : "rgba(20, 20, 20, 0.4);"};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

class Tabs extends React.Component {
  render() {
    return (
      <TabNav>
        {React.Children.map(this.props.children, (child, i) => {
          return child ? (
            <Tab
              active={child.key === this.props.active}
              onClick={() => {
                this.props.onChange(child.key);
              }}
            >
              {child}
            </Tab>
          ) : null;
        })}
      </TabNav>
    );
  }
}

export default Tabs;
