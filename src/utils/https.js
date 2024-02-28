let common_url = 'https://xlite.kedacom.com/xlite/api'; //请求的url
let header = {
  // 'Content-Type': 'application/x-www-form-urlencoded',
  // 'Cache-Control': 'no-cache',
  // "accesstoken": token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
};
import {OMDB_BASE_URL} from '@env';
const http = (method, url, params) => {
  console.log(method, url, params, 'wdwed');
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key]),
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  console.log(OMDB_BASE_URL + url, 'OMDB_BASE_URL + urlOMDB_BASE_URL + url');
  return fetch(OMDB_BASE_URL + url, {
    method,
  })
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.warn(e));
};
//导出
export default http;
