const axios = require('axios'); // 引入 axios
const util = require('util');
const payload = require('C:/workspace/01/payload.json'); // 引入 payload
const baseURL = "https://hapi.fhir.tw/baseDstu3"; // 設定 Base URL

axios.post(`${baseURL}/Patient`, payload) // 傳送 POST 請求
    .then(res => {
        console.log("傳送成功" + util.inspect(res.data, {
            depth: null
        }));
    }).catch(err => {
        console.log("發生錯誤" + util.inspect(err, {
            depth: null
        }));
    });    