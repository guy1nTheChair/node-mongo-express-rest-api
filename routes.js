const Express = require("express");
const bodyParser = require("body-parser");
const studentsModule = require("./students");
const router = Express.Router();

router.use(bodyParser.json());

//Get All Students
router.get("/getAllStudents", (req, res) => {
  console.log("inside routes");
  res.send(studentsModule.students);
});

//Get Student By ID
router.get("/getStudent/:id", (req, res) => {
  var count = 0;
  studentsModule.students.forEach(obj => {
    if (req.params.id === obj["id"]) {
      count++;
      res.status(200).send(obj);
    }
  });
  if (count === 0) {
    res.status(404).send("Invalid Student ID, please try again!!");
  }
});

router.post("/addStudent", (req, res) => {
  console.log("Inside Post");
  res.status(201).send({ Message: "Post Success" });
});

module.exports = router;
