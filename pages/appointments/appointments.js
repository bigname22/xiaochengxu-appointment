// pages/appointments/appointments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appointments: [
      {
        name: '周润发',                    // 预留姓名
        phone: '18828384234',              // 预留电话
        status: 1,                          // 0:未接单 1：已接单 2：用户取消 3：商家取消 4：已接单
        editTime: '150050304353',          // 编辑时间
        appointmentTime: '150050304353',   // 预约时间
        appointmentNumberOfPeople: 2,      // 预约到店人数
        remarks: '先帮忙倒杯水',            // 备注
        statusDesc: '--12',
        barber: {                          // 预约理发师
          name: '盲辉',
          price: '68',
          job: '店长',
          goodRate: 100,
          reservationNum: 440
        }, 
      },
      {
        name: '周润发',                    // 预留姓名
        phone: '18828384234',              // 预留电话
        status: 4,                         // 0:未接单 1：已接单 2：用户取消 3：商家取消 4：已结单
        editTime: '150050304353',          // 编辑时间
        appointmentTime: '150050304353',   // 预约时间
        appointmentNumberOfPeople: 2,      // 预约到店人数
        remarks: '先帮忙倒杯水',            // 备注
        statusDesc: '--13',
        barber: {                          // 预约理发师
          name: '盲辉',
          price: '68',
          job: '店长',
          goodRate: 100,
          reservationNum: 440
        },
      },
    ]
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
    this.fixData();
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
    for (let i=0;  i< this.data.appointments.length;  i++) {
      let item = this.data.appointments[i];
      let valueObj = this.getValuesByStatus(item.status)
      console.log('---', valueObj);
      item.statusDesc = valueObj.desc;
      item.color = valueObj.color;
    }
    console.log('appointments', this.data.appointments);
    this.setData({
      appointments: this.data.appointments,
    })
  },

  // 通过订单status返回订单状态描述getValuesByStatus
  getValuesByStatus: function (status) {
    let valueObj = {
      desc: '',
      color: ''
    };
    switch (status) {
      case 0:
        valueObj.desc = '未接单';
        valueObj.color = 'red'
      break;
      case 1:
        valueObj.desc = '已接单';
        valueObj.color = 'green'
        break;
      case 2:
        valueObj.desc = '已取消';
        valueObj.color = 'grey'
        break;
      case 3:
        valueObj.desc = '已取消';
        valueObj.color = 'grey'
        break;
      case 4:
        valueObj.desc = '已结单';
        valueObj.color = 'yellow'
        break;
    }
    return valueObj;
  }
})