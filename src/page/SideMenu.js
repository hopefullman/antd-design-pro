import React ,{Component,Fragement} from 'react';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';

const SubMenu = Menu.SubMenu;
const namespace = 'SideMenu';
const mapStateToProps = (state) => {
  const SideMenu = state[namespace].data;
  return {
    SideMenu:SideMenu
  };
};
const mapDispatchToProps=(dispatch)=>{
	return {
		onDidGet: () => {
	     dispatch({
	        type: `${namespace}/onDidGet`
	     });
	  }
	}
}
@connect(mapStateToProps,mapDispatchToProps)
class SideMenu extends Component{
	
	render(){
		return(
			<div>
			<div onClick={this.props.onDidGet}>123</div>
			<Menu
				mode="inline"
				theme='dark'
			>
			{
				this.props.SideMenu.map(item=>{
					return (
						<SubMenu key={item.name} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
				          <Menu.Item key={item.name}><Link to={item.name}>{item.name}</Link></Menu.Item>
				          	
        				</SubMenu>
					)
				})
			}
			</Menu>
			</div>
		) 
	}
}
export default SideMenu;