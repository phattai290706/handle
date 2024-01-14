const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync, rmdirSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "gban.json");
 exports.rmgban = async (req, res, next) => {

   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var uid = req.query.uid;
 if (dataJson.some(i => i.senderID == uid) == false) {
 return res.json({
data: "false",
 msg: `[ NOTI ] - Box Không Tồn Tại Hoặc Đã Bị Xóa Từ Trước`,

 })
 }

if (uid > 10000000000000000000000000000) {
  return res.json({data: "false", msg: "[ Warn ] - Số Bạn Nhập Lớn Hơn Số Box Hiện Có"})
} else {
       var lmao = dataJson.find(item => item.senderID == uid);
 dataJson.splice(uid - 1, 1);
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");

   return res.json({ 
  
    data: "true",
   msg: "[ NOTI ] - Xóa Box Thành Công"
      
  
   })

   }
   }