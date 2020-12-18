const { Router } = require("express")
const controllers = require("../controllers/blogControllers")

const router = Router();

router.get("/posts", controllers.getAllPosts)
router.get("/posts/:id", controllers.getPost)
router.post("/posts", controllers.createPost)
router.put("/posts/:id", controllers.updatePost)
router.delete("/posts/:id", controllers.deletePost)

module.exports = router
