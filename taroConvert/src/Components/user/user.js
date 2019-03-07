/*
* @Author: iMocco
* @Date:   2019-02-26 17:50:28
* @Last Modified by:   iMocco
* @Last Modified time: 2019-02-26 18:25:11
*/
import Taro, { Component } from '@tarojs/taro'
import './user.scss'
import PropTypes from 'prop-types';
export default UserInfo extends Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}

UserInfo.propTypes = {
  name: PropTypes.string
};