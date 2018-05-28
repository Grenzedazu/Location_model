//app.js
App({
  onLaunch: function () {
  },
  onHide:function(){
    try { 
      wx.removeStorageSync('trainData')
    }catch(e){
      console.log(e)
      } 
  },
  globalData: {
    userInfo:["Levin","asd","sdfdsfs"]
  }

})