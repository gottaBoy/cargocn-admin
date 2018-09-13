// import { validatenull } from './validate'
// import { baseUrl } from '@/config/env'

/**
 * 加密处理
 */
// export const encryption = (params) => {
//   let {
//     data,
//     type,
//     param,
//     key
//   } = params
//   let result = JSON.parse(JSON.stringify(data))
//   if (type === 'Base64') {
//     param.forEach(ele => {
//       result[ele] = btoa(result[ele])
//     })
//   } else {
//     param.forEach(ele => {
//       var data = result[ele]
//       key  = CryptoJS.enc.Latin1.parse(key)
//       var iv = key
//       //加密
//       var encrypted = CryptoJS.AES.encrypt(
//         data,
//         key,
//         { iv:iv,
//           mode:CryptoJS.mode.CBC,
//           padding:CryptoJS.pad.ZeroPadding
//         })
//       result[ele] = encrypted.toString()
//     })
//   }
//   return result
// }

/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, typeof len === 'number' ? len : 4)
  if (date) random = random + Date.now()
  return random
}
