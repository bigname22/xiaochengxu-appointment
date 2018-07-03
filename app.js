//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    mainColor1: "#F7654E",
    mainColor2: "#FB8C7A",
    mainColor3: "#FBA99D",
    mainColor4: "#A12C19",
    userInfo: null
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
        valueObj.color = '#FF0000'
        break;
      case 1:
        valueObj.desc = '已接单';
        valueObj.color = '#228B22'
        break;
      case 2:
        valueObj.desc = '已取消';
        valueObj.color = '#BEBEBE'
        break;
      case 3:
        valueObj.desc = '已取消';
        valueObj.color = '#BEBEBE'
        break;
      case 4:
        valueObj.desc = '已结单';
        valueObj.color = '#FFD700'
        break;
    }
    return valueObj;
  }
})