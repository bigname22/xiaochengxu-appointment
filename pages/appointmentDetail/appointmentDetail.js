// pages/appointmentDetail/appointmentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appointmentDetail: {
      name: '周润发',                    // 预留姓名
      phone: '18828384234',              // 预留电话
      status: 4,                         // 0:未接单 1：已接单 2：用户取消 3：商家取消 4：已接单
      editTime: '150050304353',          // 编辑时间
      appointmentTime: '150050304353',   // 预约时间
      appointmentNumberOfPeople: 2,      // 预约到店人数
      remarks: '先帮忙倒杯水',            // 备注
      barber: {                          // 预约理发师
        name: '盲辉',
        price: '68',
        job: '店长',
        goodRate: 100,
        reservationNum: 440
      }, 
      store: {
        name: '奥莱呀呀美发店',
        address: '广东省广州市白云区西槎路聚龙商业广场8号',
        phone: '18829193123',
        wechatCount: 'bignamesss',
        boss: {

        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fixData();
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

  fixData: function () {
    let valueObj = getApp().getValuesByStatus(this.data.appointmentDetail.status);
    this.data.appointmentDetail.color = valueObj.color;
    this.data.appointmentDetail.statusDesc = valueObj.desc;
    this.setData({
      appointmentDetail: this.data.appointmentDetail
    })
    console.log(valueObj.color)
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: this.data.appointmentDetail.color,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  }
})