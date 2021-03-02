const express = require("express")
const router = express.Router()
const pembelianController = require("../controller/pembelianController")

router.get("/", pembelianController.index)
router.get("/create", pembelianController.create)
router.post("/", pembelianController.store)
router.get("/:id/edit", pembelianController.edit)
router.put("/:id", pembelianController.update)
router.delete("/:id", pembelianController.destroy)
module.exports = router
