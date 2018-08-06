// pages/home/home.js
var app = getApp()
Page({
  data: {
  
    // banner
    imgUrls: [
      '/images/bottomNav/xiangcai.png',
      '/images/bottomNav/e3game.png',
      '/images/bottomNav/huawei.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 正在直播
    liveList: [
      {
        coverImg: '/images/bottomNav/mouhuanjun.png',
        name: '某幻君',
        desp: '心痛吃鸡',
        online: '67.3万',
        avid: 'av5'
      },
      {
        coverImg: '/images/bottomNav/guaiwulieren.png',
        name: '黑桐谷歌',
        desp: '怪物猎人 世界',
        online: '23.2万',
        avid: 'av6'
      },
      {
        coverImg: '/images/bottomNav/paigu.png',
        name: '排骨教主',
        desp: '点个歌',
        online: '117.3万',
        avid: 'av7'
      },
      {
        coverImg: '/images/bottomNav/ruanruanbing.png',
        name: '软软冰',
        desp: '樱花大会',
        online: '6.3万',
        avid: 'av8'
      }
    ],

    


  },

  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },


  //加载更多
  onReachBottom: function () {
    console.log('加载更多')
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
        recommends: [
        ],
      })
    }, 1000)
  }



}) 