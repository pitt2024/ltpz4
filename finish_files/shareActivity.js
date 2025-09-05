var isHaveRights = false;
var page = true;
var fontScale = 1;
var res = "";
$(function () {
  // var vConsole = new VConsole();
  // console.log(window);
  //  console.log( window.ms.appVersion());
  // alert(window)
  if (window.ms.isInApp()) {
    var params = {};
    res = window.ms.execSync("PvSessionId", params);
    var version = window.ms.appVersion();
    if (version > 8.03) {
      var fontSizeModel = window.ms.pageFontModel();
      if (fontSizeModel && fontSizeModel == "0") {
        //加载正常模式
        fontScale = 1;
      } else {
        //加载放大模式
        fontScale = 1.2;
      }
    }
  } else {
    res = Math.random().toString(36).slice(2);
  }
  if (fontScale === 1.2) {
    $(".bannerOne").hide();
  }
  $(".colorRed").css("font-size", 0.18 * fontScale + "rem");
  $(".recharge-title-content").css("font-size", 0.16 * fontScale + "rem");
  $(".look-button").css("font-size", 0.18 * fontScale + "rem");
  $(".submitbtn").css("font-size", 0.18 * fontScale + "rem");
  $(".chargeReturnBtn").css("font-size", 0.18 * fontScale + "rem");
  $(".header-title-center p").css("font-size", 0.16 * fontScale + "rem");
  $(".paymentPhone").css("font-size", 0.13 * fontScale + "rem");
  $(".recharge-title-left").css("font-size", 0.24 * fontScale + "rem");
  $(".more a").css("font-size", 0.16 * fontScale + "rem");
  $(".fonts").css("font-size", 0.14 * fontScale + "rem");
  $(".swiper-slide").css("font-size", 0.18 * fontScale + "rem");
  $(".failure").css("font-size", 0.14 * fontScale + "rem");
  $(".close").css("font-size", 0.2 * fontScale + "rem");
});
function showBackGroudImg(finishImg) {
  var htmlstr =
    '<div class="shareBackground"><div class="sharepart"><img src="' +
    finishImg +
    '?version=cdn_version"/><i class="closeShare"></i><i class="btn"></i></div></div>';
  $(".gactivityGift span").html(htmlstr);
}
function showBackGroudImgWithUrl(finishImg, imgUrl) {
  var htmlstr =
    '<div class="imgBackground"><a href="' +
    imgUrl +
    '"><img src="' +
    finishImg +
    '?version=cdn_version"  style="width:255px;margin-top:-220px;"/></a><i class="closeVip"></i></div>';
  $(".gactivityGift span").html(htmlstr);
}
function sharewap(finishUrl, phoneNo) {
  $.ajaxSettings.async = false;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=fissionPacketWap",
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
  $.ajaxSettings.async = true;
  window.location.href =
    finishUrl + "&btnType=2&channel=yhcom0003&activityCode=pro_pg19303&targetType=mobile&targetParam=" + phoneNo;
}

function share(finishUrl, orderNo) {
  $.ajaxSettings.async = false;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=fissionPacket",
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
  $.ajaxSettings.async = true;
  //var shareJson = '{\"shareType\":\"url\",\"shareTitle\":\"免费抢红包喽！\",\"shareContent\":\"20元话费红包随机出没，快来试试你的手气吧~\",\"shareURL\":\"'+finishUrl+'\",\"shareIconURL\":\"http://image.shop.10010.com/upay/biz/npfMob/npfMobWap/images/shareactivity.jpg"}';
  //window.location.href = "https://m.client.10010.com/redpacketsplitNew/static/redpInit_new/index?btnType=2&channel=rechg0001&activityCode=pro19118";
  window.location.href = finishUrl + "?orderno=" + orderNo;
  // window.location = "clientAction={\"type\":\"share2\",\"url\":\"\",\"shareList\":\"wechat,wechatmoments\",\"msg\":\"${shareMes}\",\"shareJson\":" + shareJson + "}";
}

function rechargeActivityHref(url, activityId) {
  $.ajaxSettings.async = false;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=rechargeActivity" + activityId,
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
  $.ajaxSettings.async = true;
  window.location.href = url;
}

// function rechargeActivityHref(url, activityId, flag, position, orderNo,phoneNo,province,city,bussineType,serviceNo) {
//   pageviewRecharge(activityId,phoneNo,province,city,bussineType,serviceNo);
//   if (flag != null && flag == "1") {
//     if (position != null && position == "right") {
//       getrights(orderNo);
//       return;
//     }
//   }
//   window.location.href = url;
// }

function getrights(orderNo) {
  $.ajax({
    type: "post",
    async: true,
    url: serviceURL + "rights/active",
    data: { orderNo: orderNo },
    dataType: "json"
  })
    .success(function (data, status, headers, config) {
      if (data.out == "success") {
        $("#errormsg").text("领取权益成功!").show();
        errormsgshow();
      } else {
        $("#errormsg").text("领取权益失败!").show();
        errormsgshow();
      }
    })
    .error(function () {
      $("#errormsg").text("领取权益失败!").show();
      errormsgshow();
    });
}

function recordActivityTimes(activityId) {
  $.ajaxSettings.async = false;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=rechargeActivity" + activityId,
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
  $.ajaxSettings.async = true;
}

function rechargeActivityHref(
  url,
  activityId,
  flag,
  position,
  orderNo,
  phoneNo,
  province,
  city,
  bussineType,
  serviceNo,
  transId,
  loginProvince,
  loginCity
) {
  pageviewRecharge(activityId, phoneNo, province, city, bussineType, serviceNo, loginProvince, loginCity, transId);
  if (page) {
    page = false;
    if (flag != null && flag == "1") {
      if (position != null && position == "right") {
        if (!isHaveRights) {
          recordActivityTimes(activityId);
        }
        getrights(orderNo);
        return;
      }
    }
    if (position != null && position == "left") {
      recordActivityTimes(activityId);
      window.location.href = url;
    } else {
      recordActivityTimes(activityId);
      window.location.href = url;
    }
  }
  window.ms.navigateTo({ target: url });
}

function getrights(orderNo) {
  $(".loadingdiv").show();
  isHaveRights = true;
  $.ajax({
    type: "post",
    async: true,
    url: serviceURL + "rights/active",
    data: { orderNo: orderNo },
    dataType: "json"
  })
    .success(function (data, status, headers, config) {
      $(".loadingdiv").hide();
      if (data.out == "success") {
        $("#errormsg").text("领取权益成功!").show();
        errormsgshow();
      } else {
        $("#errormsg").text("领取权益失败!").show();
        errormsgshow();
      }
    })
    .error(function () {
      $(".loadingdiv").hide();
      $("#errormsg").text("领取权益失败!").show();
      errormsgshow();
    });
}

function recordActivityTimes(activityId) {
  $.ajaxSettings.async = false;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=rechargeActivity" + activityId,
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
  $.ajaxSettings.async = true;
}

var clientVersion = function () {
  var G = navigator.userAgent;
  var L = G.match(/Chrome/i) != null && G.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
  var M = G.match(/(Android);?[\s\/]+([\d.]+)?/) ? true : false;
  var a = G.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
  var q = !a && G.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
  var c = (q || a) && G.match(/Safari/);
  var u = G.match(/MQQBrowser\/([\d\.]+)/) ? true : false;
  var K = 0;
  c && (K = G.match(/Version\/([\d\.]+)/));
  if (M) {
    //安卓
    return false;
  } else {
    //ios
    return true;
  }
};
//送金币完成页
var toJbUrl = function () {
  window.location.href = "https://act.10010.com/SigninApp/signin/querySigninActivity.htm";
};
var toGrowVal = function () {
  window.location.href = "https://img.client.10010.com/activitys/member/index.html";
};
var shareHonor = function (serviceNo, userRank) {
  window.location.href = "https://img.client.10010.com/xunzhangqiang/dist/index.html";
};
var goMedalWall = function () {
  window.location.href = "https://img.client.10010.com/xunzhangqiang/index.html";
};

//获取当前时间，格式YYYY-MM-DD
var getNowFormatDate = function () {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
};

function errormsgshow() {
  $("#errormsg").show();
  setTimeout(function () {
    $("#errormsg").fadeOut();
  }, 3000);
}

function activityHref(
  goodsUrl,
  goodsId,
  provinceCode,
  channelType,
  serviceNo,
  cityCode,
  bussineType,
  loginPhone,
  actId,
  actType,
  transId
) {
  if (goodsUrl == "" || goodsUrl == "null") {
    return;
  }
  if (judgeEmpty(provinceCode)) {
    $.ajax({
      url: ipCityUrl,
      type: "get",
      dataType: "jsonp",
      success: function (json) {
        var ipProv = json.prov;
        provinceCode = "0" + ipProv.split("|")[0];
        cityCode = ipProv.split("|")[1];
        activityTime(goodsId, provinceCode, channelType);
      }
    });
  } else {
    activityTime(goodsId, provinceCode, channelType);
  }
  pageview(actId, goodsId, actType, "1", bussineType, loginPhone, provinceCode, cityCode, transId);
  window.location.href = goodsUrl;
}
function GetRequest(reqname) {
  const url = location.search;
  if (url.indexOf("?") != -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (let i = 0; i < strs.length; i += 1) {
      if (reqname == strs[i].split("=")[0]) {
        const value = strs[i].split("=")[1];
        const param = value.split("#")[0];
        return isEmpty(param) ? "" : param;
      }
    }
    return "";
  } else {
    return "";
  }
}
function pageviewRecharge(
  activityId,
  phoneNo,
  province,
  city,
  bussineType,
  serviceNo,
  loginProvince,
  loginCity,
  transId
) {
  var secontTab = "payfee";
  if (bussineType == "08") {
    secontTab = "buycard";
  } else if (bussineType == "04" || bussineType == "05") {
    secontTab = "cardCharge";
  } else if (bussineType == "29") {
    secontTab = "actionpayfee";
  } else if (bussineType == "35") {
    secontTab = "intimate";
  }
  var data = {
    "pageViewBean.firstTab": "finish",
    "pageViewBean.secondTab": secontTab,
    "pageViewBean.actionDom": "activity#" + activityId,
    "pageViewBean.loginPhone": serviceNo,
    "pageViewBean.provCode": isEmpty(province) ? "" : province,
    "pageViewBean.cityCode": isEmpty(city) ? "" : city,
    "pageViewBean.number": phoneNo,
    "pageViewBean.initTime": esDateFormat(new Date()),
    "pageViewBean.actionTime": esDateFormat(new Date()),
    "pageViewBean.duration": 0,
    "pageViewBean.loginType": "",
    "pageViewBean.channelKey": "",
    "pageViewBean.version": window.ms.isInApp() ? window.ms.appVersion() : "",
    "pageViewBean.shortAddr": GetRequest("sinoUnionShortAddr") || "",
    "pageViewBean.titleName": "完成页",
    "pageViewBean.loginProvince": loginProvince,
    "pageViewBean.loginCity": loginCity,
    "pageViewBean.transid": transId
  };
  $.ajax({
    url: "/npfwap/NpfMob/pageView/pageViewLog",
    type: "post",
    async: false,
    data: data,
    success: function (data) {},
    error: function (data) {}
  });
}

function pageViewfinish(
  domId,
  bussineType,
  phoneNo,
  loginPhone,
  province,
  city,
  channelType,
  transId,
  loginProvince,
  loginCity
) {
  var secontTab = "payfee";
  if (bussineType == "08") {
    secontTab = "buycard";
  } else if (bussineType == "04" || bussineType == "05") {
    secontTab = "cardCharge";
  } else if (bussineType == "29") {
    secontTab = "actionpayfee";
  } else if (bussineType == "35") {
    secontTab = "intimate";
  }
  var data = {
    "pageViewBean.firstTab": "finish",
    "pageViewBean.secondTab": secontTab,
    "pageViewBean.actionDom": domId,
    "pageViewBean.loginPhone": loginPhone,
    "pageViewBean.provCode": isEmpty(province) ? "" : province,
    "pageViewBean.cityCode": isEmpty(city) ? "" : city,
    "pageViewBean.number": phoneNo,
    "pageViewBean.initTime": esDateFormat(new Date()),
    "pageViewBean.actionTime": esDateFormat(new Date()),
    "pageViewBean.duration": 0,
    "pageViewBean.loginType": "",
    "pageViewBean.channelKey": channelType,
    "pageViewBean.sessionId": res,
    "pageViewBean.version": window.ms.isInApp() ? window.ms.appVersion() : "",
    "pageViewBean.shortAddr": GetRequest("sinoUnionShortAddr") || "",
    "pageViewBean.titleName": "完成页",
    "pageViewBean.loginProvince": loginProvince,
    "pageViewBean.loginCity": loginCity,
    "pageViewBean.transid": transId
  };
  $.ajax({
    url: "https://upayquery.10010.com/npfwap/NpfMob/pageView/pageViewLog",
    async: false,
    data: data,
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "pageviewCallback",
    success: function (data) {},
    error: function (data) {}
  });
}

function pageview(activityId, goodsId, activityType, platformLog, bussineType, loginPhone, province, city, transId) {
  var domId = "banner#" + activityId + "#" + goodsId + "#" + activityType + "#" + platformLog;
  pageViewfinish(domId, bussineType, loginPhone, loginPhone, province, city, "", transId);
}

function activityTime(goodsId, provinceCode, channelType) {
  var id = "popularize" + goodsId + provinceCode + channelType;
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=" + id,
    type: "GET",
    cache: false,
    timeout: 5000,
    success: function (data) {},
    error: function (data) {}
  });
}

function broadOldOrNewContinue(BasePagePath, provinceCode) {
  $.ajax({
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "online",
    url: serviceURL + "newBroadOnline"
  })
    .success(function (data) {
      if (judgeEmpty(data)) {
        window.location.href = BasePagePath + "bankcharge/index.html?serviceType=03&bussTypeIn=04";
      } else {
        if (data.indexOf(provinceCode) != -1) {
          window.location.href = BasePagePath + "bankcharge/index.html?serviceType=03&bussTypeIn=04";
        } else {
          window.location.href = BasePagePath + "bankcharge/index.html?serviceType=03&bussTypeIn=04";
        }
      }
    })
    .error(function (data) {
      window.location.href = BasePagePath + "bankcharge/index.html?serviceType=03&bussTypeIn=04";
    });
}

var judgeEmpty = function (str) {
  return null == str || undefined == str || "" == str || str.length == 0 || "null" == str || "undefined" == str;
};
var recordTimes = function (val) {
  $.ajax({
    url: "/npfwap/NpfMob/recordTimes?key=" + val,
    type: "GET",
    cache: false,
    success: function (data) {},
    error: function (data) {}
  });
};

// 完成页查看订单/继续交费按钮点击量统计
var clickAccounts = function (val) {
  $.ajaxSettings.async = false;
  $.ajaxSettings.async = true;
};
//乘法
var accMul = function (arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / Math.pow(10, m);
};

var isEmpty = function (str) {
  return null == str || undefined == str || "" == str || str.length == 0 || "undefined" == str;
};
var esDateFormat = function (date) {
  var strYear = date.getFullYear();
  var strDay = leftPadZero(date.getDate(), 2);
  var strMonth = leftPadZero(date.getMonth() + 1, 2);
  var hour = leftPadZero(date.getHours(), 2);
  var minute = leftPadZero(date.getMinutes(), 2);
  var second = leftPadZero(date.getSeconds(), 2);
  var milliseconds = date.getMilliseconds();
  return (
    strYear + "-" + strMonth + "-" + strDay + "T" + hour + ":" + minute + ":" + second + "." + milliseconds + "+0800"
  );
};

var leftPadZero = function (str, length) {
  var strLength = (str + "").length;
  var zeros = "";
  if (strLength < length) {
    for (var i = 0; i < length - strLength; i++) {
      zeros += "0";
    }
  }
  return zeros + str;
};
