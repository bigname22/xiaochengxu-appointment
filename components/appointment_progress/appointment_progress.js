// components/appointment_progress/appointment_progress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statues: [
      {
        status: 0,
        desc: '未接单',
        icon: '',
        isLight: false,
      },
      {
        status: 1,
        desc: '已接单',
        icon: '',
        isLight: false,
      },
      {
        status: 2,
        desc: '已取消',
        icon: '',
        isLight: false,
      },
      {
        status: 4,
        desc: '已结单',
        icon: '',
        isLight: false,
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
