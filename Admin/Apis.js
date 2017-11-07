/**
 * Created by kee on 15/10/21.
 */
import axios from 'axios';
// const host = 'HTTP://localhost:3000' ;

const host = 'http://localhost:3002' ;

export default function apis({ url, method, ...others }) {
  // console.log(host + url)
  // alert(host + url)
  let AUTH_TOKEN = localStorage.getItem('token');
  if (AUTH_TOKEN) {
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  }
  return axios({
    url: host + url,
    method: method,
    ...others
  });
}

// export default function apisOfToken({ url, method, ...others }) {
//   others.token = localStorage.getItem('token');
//   return axios({
//     url: host + url,
//     method: method,
//     ...others
//   });
// }
