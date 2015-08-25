function getWXConfig(){
  $.getJSON("http://wx.chainbest.tv/wxapi/get_config?url=" + encodeURIComponent(window.location.href) + "&callback=?",function(data){
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","translateVoice","uploadVoice"]
    });
  });
}
