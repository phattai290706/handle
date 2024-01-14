const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "duyetbox.json");

 exports.checkall = async (req, res, next) => {
   var msg = [];
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
   
   if (dataJson[0] == undefined) {
     return res.json({ data: "false", msg: "[ WARN ] - Chưa Có Người Dùng"})
   } 
   
   else {
     index = 0
   for (let stt in dataJson) {
        var ulatroi = dataJson[stt].senderID;
      msg += `Box Thứ ${index += 1}: ${ulatroi}\n\n`
    }
    return res.json({ data: `[ BOXRM ] - Tổng Số Box: ${dataJson.length}\n${msg}`,
    count: dataJson.length })
 }
 }