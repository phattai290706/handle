const { errorHandler } = require("../utils");
 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "duyetbox.json");
 exports.duyetboxrm = async (req, res, next) => {
   try {
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
     var uid = req.query.uid;
    /* var cc = !dataJson.some(i => i.senderID == uid)
 if (cc == true) {
 return res.json({
data: "false",
 msg: `[ NOTI ] - Box Không Tồn Tại Hoặc Đã Bị Xóa Từ Trước`,

 })
 }
 */
if (uid > dataJson.length) {
  return res.json({data: "false", msg: "[ Warn ] - Số Bạn Nhập Lớn Hơn Số Box Hiện Có"})
} else {
       var lmao = dataJson.find(item => item.senderID == uid);
 dataJson.splice(uid - 1, 1);;
  writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");

   return res.json({ 
  
    data: "true",
   msg: "[ NOTI ] - Xóa Box Thành Công"
      
  
   })

   }
   } catch (err) {
     return res.json({ 
 
    data: "false",
   msg: "[ NOTI ] - Box Không Tồn Tại Hoặc Đã Bị Xóa Từ Trước"
   })
  }
   }