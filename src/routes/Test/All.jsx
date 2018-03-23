import  React from "react";
import { Tabs, Radio } from 'antd';
import TestAll from './Test';
const TabPane = Tabs.TabPane;


class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: "100%" }}
        >
          <TabPane tab="听力" key="1">即将播放听力</TabPane>
          <TabPane tab="选择题" key="2"><TestAll/></TabPane>
          <TabPane tab="阅读理解一" key="3">Content of tab 3</TabPane>
          <TabPane tab="阅读理解二" key="4">Content of tab 4</TabPane>
          <TabPane tab="填空" key="5">Content of tab 5</TabPane>
          <TabPane tab="作文" key="6">Content of tab 6</TabPane>

        </Tabs>
      </div>
    );
  }
}
export default SlidingTabsDemo;
