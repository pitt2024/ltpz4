// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   }
//   //    navigation: {
//   //      nextEl: '.swiper-button-next',
//   //      prevEl: '.swiper-button-prev',
//   //    },
// });
// var swiper2 = new Swiper(".welfareSwiper", {
//   slidesPerView: 1,
//   loop: false
// });
//手机号加密
$(document).ready(function () {
  var phone = $(".paymentPhone").text().toString();
  var head = phone.substr(0, 4);
  var foot = phone.substr(7);
  $(".paymentPhone").html(head + "****" + foot);
});
var toElectronInvoice = function (channelType) {
  $.ajaxSettings.async = true;
  var invoiceURL =
    channelType != "308"
      ? "http://wap.10010.com/t/query/einvoice.htm"
      : "https://img.client.10010.com/dianzifapiao2/index.html";
  // window.location.href = invoiceURL;
  window.ms.navigateTo({ target: invoiceURL });
};
var queryBlance = function () {
  $.ajaxSettings.async = true;
  window.ms.navigateTo({ target: "https://img.client.10010.com/shengyuhuafei/index.html" });
};

var toChargeFlow = function (serviceType) {
  $.ajaxSettings.async = true;
  // window.location.href =
  //   "https://m.client.10010.com/mobileService/businessTransact/query3gFlowDetail.htm?flowType=adFlow&menuId=000300010001";
  window.ms.navigateTo({ target: "https://m.client.10010.com/mobileService/businessTransact/query3gFlowDetail.htm?flowType=adFlow&menuId=000300010001"});
};
var toHfgo = function (serviceType) {
  $.ajaxSettings.async = true;
  var invoiceURL =
    "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?to_url=https://account.bol.wo.cn/cuuser/open/openLogin/hfgo?ch=142&sch=20";
  // window.location.href = invoiceURL;
  window.ms.navigateTo({ target: invoiceURL});
};

var toRecommandUrl = function (key, url, transId, bussineType, phoneNo, loginPhone, province, city, channelType) {
  pageViewfinish("Recommand" + key, bussineType, phoneNo, loginPhone, province, city, channelType, transId);
  // window.location.href = url;
  window.ms.navigateTo({ target: url});
};

var welfareLink = function (
  activityId,
  goodsId,
  activityType,
  platformLog,
  url,
  bussineType,
  phoneNo,
  loginPhone,
  province,
  city,
  channelType,
  transId
) {
  pageViewfinish(
    "banner#" + activityId + "#" + goodsId + "#" + activityType + "#" + platformLog,
    bussineType,
    phoneNo,
    loginPhone,
    province,
    city,
    channelType,
    transId
  );
  // window.location.href = url;
  window.ms.navigateTo({ target: url});
};
var getbizCode = function (serviceType, netType) {
  var serviceTypeMap = {
    "01": "JF30001", //JF30001：手机交费
    "03": "JF30002", //固话交费
    "0308": "JF30003", //固话交费
    23: "JF30004", //包年续费（宽带趸交）
    90: "JF30005", //异网交费
    40: "JF30006", //销户号交费
    "06": "JF30007", //手机直充
    "07": "JF30008", //固话直充
    "08": "JF30010", //购卡
    "04": "JF30011", //充值卡充值
    "05": "JF30011", //充值卡充值
    29: "JF30013", //存费送费
    35: "JF30014" //亲密充（暂不支撑）
  };
  if ("04" == serviceType || "05" == serviceType) {
    return serviceTypeMap[serviceType];
  }
  if ("08" == netType) {
    serviceType = serviceType + netType;
  }
  return serviceTypeMap[serviceType];
};
