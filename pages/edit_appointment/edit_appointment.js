// pages/appointments/appointments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barber: {},
    peopleNums: [
      {
        check: true,
        text: '1人',
        num: 1
      },
      {
        check: false,
        text: '2人',
        num: 2
      },
      {
        check: false,
        text: '3人',
        num: 3
      },
      {
        check: false,
        text: '4人',
        num: 4
      },
      {
        check: false,
        text: '多人',
        num: -1
      },
    ],
    appointmentDate: '2018-06-12',
    appointmentTime: '15:00',
    showBarber: false,
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let barberStr = options.barber;
    console.log('---收到理发师', barberStr)
    if(barberStr) {
      this.setData({
        barber: JSON.parse(barberStr),
        showBarber: true
      })
    }
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

  checkInput: function () {
    let result = {
      pass: false,
      msg: '',
    }
    if (this.data.barber.name) {
      result.pass = true
    } else {
      result.pass = false;
      result.msg = '请选择理发师'
    }
    return result;
  },

// ------------------ 点击事件 -----------------------------
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      appointmentDate: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      appointmentTime: e.detail.value
    })
  },

  btnClickAddGood: function (e) {
    wx.navigateTo({
      url: '../goods/goods?mark=edit_appointment'
    })
  },

  btnClickNum: function (e) {
    for (let i = 0; i < this.data.peopleNums.length; i++) {
      let numItem = this.data.peopleNums[i];
      if (e.currentTarget.dataset.item.num == numItem.num) {
        numItem.check = true;
      }else {
        numItem.check = false;
      }
    }
    this.setData({
      peopleNums: this.data.peopleNums
    })
  },

  // 提交预约单 
  btnClickAppointment: function (e) {
    let result = this.checkInput();
    if (result) {
      if (result.pass) {
        wx.showToast({
          title: '预约成功',
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: result.msg,
          icon: 'none'
        })
      }
    } 
  }
})