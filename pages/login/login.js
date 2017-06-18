/*
* @Author: iMocco
* @Date:   2017-06-18 15:01:37
* @Last Modified by:   iMocco
* @Last Modified time: 2017-06-18 18:19:56
*/
Page({
  navigateTo: function () {
    wx.navigateTo({ url: '/pages/add/add' })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  redirectTo: function () {
    wx.redirectTo({ url: './navigator' })
  }
})
