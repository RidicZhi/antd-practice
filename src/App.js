import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import Logo from './logo.jpg';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        width='300'
      >
        <div className="logo" key="logo">
              <img src={Logo} alt="logo" />
              <h1>Ridic  Zhi</h1>
          </div>
        <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header" style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 500,
        }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
    );
  }
}

export default App;
