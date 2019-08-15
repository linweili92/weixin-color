// pages/home/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    t1: "This is page data.",
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('监听用户下拉刷新事件')
    wx.stopPullDownRefresh()
    console.log('已刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      t1: 'Set some data for updating view.' + Math.floor(Math.random() * 50 + 50)
    })
  },
  changeNum: function () {
    // this.data.num = 1
    this.setData({
      num: this.data.num + 1
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
  naTo:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  reTo: function () {
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },
  switTo: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  reLaunchTo: function () {
    wx.reLaunch({
      url: '/pages/logs/logs',
    })
    // wx.reLaunch({
    //   url: '/pages/index/index',
    // })
  }
})