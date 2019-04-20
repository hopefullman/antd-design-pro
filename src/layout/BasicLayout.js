import { Component } from 'react';
import { Layout } from 'antd';
import SideMenu from '../page/SideMenu.js';
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>

        <Sider style={{color:'#f00',fontSize:20,height:'100vh',textAlign:'center'}}><SideMenu /></Sider>

        <Layout>
          <Header style={{color:'#fff',fontSize:20,height:60}}>Header</Header>
          <Content style={{color:'#000',fontSize:20}}>{this.props.children}</Content>
          <Footer style={{color:'#000',fontSize:20,height:50}}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
