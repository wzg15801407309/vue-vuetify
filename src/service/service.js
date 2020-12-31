import axios from 'axios';
/** 用于序列化post类型的数据，否则后端无法接收到数据 */ 
import qs from 'qs';
import { config } from 'vue/types/umd';

/** 设置请求头 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
/**
 * 设置跨域问题
 * false： 在跨域请求的时候，不会携带用户的额凭证，返回的response里会忽略cookie
 */
 axios.defaults.withCredentials = false;


 /** 创建axios实例  请求超时设置 */
 const instance = axios.create({
   timeout:300000,
 });

 /** 请求响应发起前拦截 */
 instance.interceptors.request.use( config => {
  //  config.headers['X-Token'] = token;
  console.log('config: ', config);
  return config;
 }, err => {
   return Promise.reject(err);
 })
 /** 请求响应发起后拦截 */
instance.interceptors.response.use( response => {
  console.log('response: ', response);
  return response;
},err => {
  console.log('err: ', err);
  return Promise.reject(err);
});