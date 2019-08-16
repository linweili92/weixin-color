// pages/home/main.js
//引入js
var common = require("../../utils/common.js")
var order = ['red', 'yellow', 'blue', 'green', 'red']
var initData = 'this is first line\nthis is second line'
var extraLine = [];
var types = ['default', 'primary', 'warn']


Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    text: initData,
    imgUrls: [
      '../../images/swiper/i1.jpg',
      '../../images/swiper/i2.jpg',
      '../../images/swiper/i3.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    x: 0,
    y: 0,
    iconSize: [10, 20, 30, 40, 50, 60],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    toView: 'red',
    scrollTop: 100,
    t1: "This is page data.",
    num: 0,
    zero: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    },
    aa: [1, 2, 3, 4, 5],
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    wxf: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
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
    this.videoCtx = wx.createVideoContext('myVideo')
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
  viewTap: function (event) {
    console.log(event)
    common.sayHello(666)
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
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  taps: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  },
  add: function (e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },

  tapn() {
    console.log('tap')
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  }
})