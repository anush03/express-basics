const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  UpdatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", UpdatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(UpdatePerson).delete(deletePerson);

module.exports = router;
