const { renderChatUi } = require("../controller/chat");




const router = require("express").Router();

router.route("/").get(renderChatUi)



module.exports = router;