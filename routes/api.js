const router = require("express").Router();
const { home } = require("../controllers/home");
const { key } = require("../controllers/key");
const { gbancheck } = require("../controllers/gbancheck");
const { duyetbox } = require("../controllers/duyetbox");
const { checkuser } = require("../controllers/checkluot");
const { checkalluser } = require("../controllers/checkalluser");
const { gban } = require("../controllers/gban");
const { duyetboxadd } = require("../controllers/duyetboxadd");

const { add_user } = require("../controllers/add");
const { duyetboxrm } = require("../controllers/duyetboxrm");
const { checkall } = require("../controllers/checkall");
const { userdangky } = require("../controllers/user-r");
const { fcacheckall } = require("../controllers/fcacheck");
const { user } = require("../controllers/click");
const { rmgban } = require("../controllers/rmgban");
router.get("/", home);

router.get("/checkuser", checkuser)
router.get("/checkallduyetbox", checkall)
router.get("/add", add_user);
router.get("/click", user);
router.get("/reg", userdangky);
router.get("/checkalluser", checkalluser);
router.get("/duyetboxadd", duyetboxadd);
router.get("/duyetboxrm", duyetboxrm);
router.get("/duyetbox", duyetbox);
router.get("/gbanadd", gban);
router.get("/gbanrm", rmgban);

router.get("/key", key);
router.get("/gbancheck",gbancheck)
module.exports = router;