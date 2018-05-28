//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '获取信息',
    lg:"",
    lt:"",
  },
  //事件处理函数
  onLoad: function () {
  },
  getLocation: function () {
    wx.getLocation({
      success: function (res) {
        //在data中声明//lg：“”，//lt：“”
        this.setData({
          lg: res.longitude,
          lt: res.latitude
        })
      }
    })
  },
  searchWifi: function () {
    //在app.js 加入onHide: function(){try { 
    //wx.removeStorageSync('trainData')
    //}catch(e) {
    //console.log(e)
    //} },
    wx.startWifi()
    wx.getWifiList()
    wx.onGetWifiList(function (res) {
      console.log(res.wifiList)

      var wifi_List = new Array();

      for (var i = 0; i < res.wifiList.length; i++) {
        wifi_List.push(
          res.wifiList[i].SSID + " " + res.wifiList[i].BSSID// + //":" + " " +
          //res.wifiList[i].signalStrength
        )
      }
      console.log(wifi_List)

      var obj = {},temp = [];
      for (var j = 0; j < wifi_List.length; j++) {
        if (!obj[wifi_List[j]]) {
          obj[wifi_List[j]] = getApp().globalData.userInfo[0];
          temp.push(wifi_List[j])
        }
      }

      console.log(obj)
      console.log(temp)


      try {
        wx.setStorageSync("Baseline", obj)
      } catch (e) {
        console.log(e)
      }
      
    })    
  } 
})
