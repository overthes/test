var app = getApp()
Page({
  data: {

    imgUrls: [
      '/images/bottomNav/mengzhan.png',
      '/images/bottomNav/pubg.png',
      '/images/bottomNav/aochangzhang.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    hotList: [
      {
        coverImg: '/images/bottomNav/bh3rd.png',
        title: '《崩坏3》全新动画短片「女王降临」',
        playNum: '192.2万',
        commentNum: '3.1万',
        avid: 'av31'
      },
      {
        coverImg: '/images/bottomNav/zilaiye.png',
        title: '【火影&自来也】自来也到底有多强？岸本都不敢给他太多的空间',
        playNum: '69.7万',
        commentNum: '9736',
        avid: 'av32'
      },
      {
        coverImg: '/images/bottomNav/yiquan.png',
        title: '【一拳超人】OVA',
        playNum: '17.7万',
        commentNum: '3691',
        avid: 'av33'
      },
      {
        coverImg: '/images/bottomNav/bili.png',
        title: 'bilibili9年前壁纸居然是这个的？对比现在，B站的成长！！！',
        playNum: '12.9万',
        commentNum: '2957',
        avid: 'av34'
      },
      {
        coverImg: '/images/bottomNav/zhuangji.png',
        title: '暑假顶级装机，我就看看不买系列',
        playNum: '4.3万',
        commentNum: '623',
        avid: 'av35'
      },
      {
        coverImg: '/images/bottomNav/zhonghuatianyuanquan.png',
        title: '为中华田园犬正名，谁说土狗不聪明',
        playNum: '39.7万',
        commentNum: '5766',
        avid: 'av36'
      },
      {
        coverImg: '/images/bottomNav/zhangjike.png',
        title: '【帝国的绝凶虎】张继科',
        playNum: '4.7万',
        commentNum: '2396',
        avid: 'av37'
      },
      {
        coverImg: '/images/bottomNav/ditelv.png',
        title: '【底特律：成为人类】如果你一直停留在游戏开始界面会..',
        playNum: '12.1万',
        commentNum: '3977',
        avid: 'av38'
      },
    ]
  }
  })