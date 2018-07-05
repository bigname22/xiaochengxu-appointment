// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBg: false,
    storeInfo: {
      name: '欧莱雅雅理发店',
      phone: '020-213213',
      address: '广东省广州市白云区聚隆广场8号',
    },
    userInfo: {},
    publishs: [
      {
        icon: '/assets/img/ic_p6.jpg',
        title: '中秋节大优惠',
        desc: '洗剪吹只需20元，会员冲100送100',
        content: ''
      },
      {
        icon: '/assets/img/ic_p6.jpg',
        title: '中秋节大优惠',
        desc: '洗剪吹只需20元，会员冲100送100',
        content: ''
      },
      {
        icon: '/assets/img/ic_p6.jpg',
        title: '中秋节大优惠',
        desc: '洗剪吹只需20元，会员冲100送100',
        content: ''
      }
    ],
    text: {
      name: '欧莱雅雅芳理发店',
      appointment: '预约',
      publish: '最新公告',
      func1: '理发师',
      func2: '我的预约'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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
  
  },

  //事件处理函数
  btnClickGoods: function () {
    wx.navigateTo({
      url: '../goods/goods?mark=home'
    })
  },

  btnClickAppointment: function () {
    wx.navigateTo({
      url: '../edit_appointment/edit_appointment'
    })
  },

  btnClickAppointments: function () {
    wx.navigateTo({
      url: '../appointments/appointments'
    })
  },
})