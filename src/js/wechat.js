function WXBaseAuthorize() {
   console.log(location.origin,"url")

   const baseUrl = encodeURIComponent("https://test.zhongchebaolian.com/public/#/code" );
   console.log(baseUrl,"定向url")//wx2ee0af7fbdfe267e
   var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri="+ baseUrl +"&response_type=code&scope=snsapi_base&#wechat_redirect";
   window.location.href= url;
};
function WXBaseAuthorizeCase() {
   console.log(location.origin,"url")

   const baseUrl = encodeURIComponent("https://test.zhongchebaolian.com/public/#/caseCode" );
   console.log(baseUrl,"定向url")//wx2ee0af7fbdfe267e
   var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri="+ baseUrl +"&response_type=code&scope=snsapi_base&#wechat_redirect";
   window.location.href= url;
   // https://test.zhongchebaolian.com/public/#/
   // http://localhost:8085/public/?code=0214IYd610X9TS1O6Ve61IW0e614IYd4&state=#/code
   // https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx2ee0af7fbdfe267e&secret=db81e0704e0011f7a64074e456f8ccfd&code=061xmJVY19QH401S7aVY1lWKVY1xmJV7&grant_type=authorization_code
   // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
   // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
   // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
    // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F&response_type=code&scope=snsapi_base&#wechat_redirect
// https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F&response_type=code&scope=snsapi_base&#wechat_redirect
}
export default {
   WXBaseAuthorize:WXBaseAuthorize,
   WXBaseAuthorizeCase:WXBaseAuthorizeCase
}



// export function WXBaseAuthorize() {
//    console.log(location.origin,"url")

//    const baseUrl = encodeURIComponent("https://test.zhongchebaolian.com/public/#/code" );
//    console.log(baseUrl,"定向url")//wx2ee0af7fbdfe267e
//    var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri="+ baseUrl +"&response_type=code&scope=snsapi_base&#wechat_redirect";
//    window.location.href= url;
//    // https://test.zhongchebaolian.com/public/#/
//    // http://localhost:8085/public/?code=0214IYd610X9TS1O6Ve61IW0e614IYd4&state=#/code
//    // https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx2ee0af7fbdfe267e&secret=db81e0704e0011f7a64074e456f8ccfd&code=061xmJVY19QH401S7aVY1lWKVY1xmJV7&grant_type=authorization_code
//    // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
//    // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
//    // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2Fcode&response_type=code&scope=snsapi_base&#wechat_redirect
//     // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F&response_type=code&scope=snsapi_base&#wechat_redirect
// // https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F
// // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee0af7fbdfe267e&redirect_uri=https%3A%2F%2Ftest.zhongchebaolian.com%2Fpublic%2F%23%2F&response_type=code&scope=snsapi_base&#wechat_redirect
// }