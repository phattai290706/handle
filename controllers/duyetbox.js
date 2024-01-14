const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "duyetbox.json");
 exports.duyetbox = async (req, res, next) => {
   var data = require("./cache/gban.json")
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var uid = req.query.uid;
var buh = data.find(item => item.senderID == uid)
var cc = data.some(i => i.senderID == uid)
 if (cc == true) {
   var lydo = buh.reson;
 return res.json({
data: "false",
 msg: `Bạn đã bị gban\nVới lý do: ${lydo}\n> liên hệ https://facebook.com/itmetdung để biết thêm chi tiết`,
 })
 }
 var userData = dataJson.find(item => item.uid == uid);
   if (!dataJson.some(i => i.senderID == uid) == true){
     return res.jsonp({data: "false", msg: "[ MODE ] - BOX CỦA BẠN CHƯA DUYỆT\nliên hệ admin bot để được duyệt"})
   }
   else {
     return res.jsonp({data: "true", msg: "Đã Được Duyệt"})
}
 }