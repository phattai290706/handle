const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "duyetbox.json");
 exports.duyetboxadd = async (req, res, next) => {
   //var data = require("./cache/gban.json")
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var uid = req.query.uid;
     if(!uid || isNaN(uid)) {
      return res.json({
data: "false",
 msg: `[ NOTI ] - Bạn Không thể thiếp tực nếu chưa nhập số`,

 })
    }
 var userData = dataJson.find(item => item.senderID == uid) || { senderID: uid};
 if (!dataJson.some(i => i.senderID == uid)) {
 dataJson.push(userData);
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
   return res.jsonp({ 
     senderID : uid,
     data: "true",
     msg: `[ NOTIC ] - Phê Duyệt Thành Công UID: ${uid}`
   })}
   if (!dataJson.some(i => i.senderID == uid) == true){
     
     return res.jsonp({data: "false", msg: "[ NOTIC ] - Phê Duyệt Thất Bại"})
   }
   else {
     return res.jsonp({data: "false", msg: "[ MODE ] - Đã Được Duyệt Từ Trước"})
}
 }