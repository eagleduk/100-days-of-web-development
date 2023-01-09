const express = require("express");

const blogController = require("../controllers/post-controllers");
const authProtect = require("../middlewares/auth-protect-middleware");

const router = express.Router();

router.get("/", blogController.getHome);

router.use(authProtect); // 해당 라인 이후의 router 에 'authProtect' 미들웨어를 추가한다.

router.get("/admin", blogController.getAdmin);

router.post("/posts", blogController.createPost);

router.get("/posts/:id/edit", blogController.getSinglePost);

router.post("/posts/:id/edit", blogController.updatePost);

router.post("/posts/:id/delete", blogController.deletePost);

module.exports = router;
