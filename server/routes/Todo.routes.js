const express = require("express");
const router = express.Router();
/////////////////////dep-task////////////////////////////////////
const TodoController = require("../controller/Todo.controller");

router.put('/today/task/firstStatus/:id', TodoController.firstStatus);

router.put('/today/task/secondStatus/:id', TodoController.secondStatus);

router.put('/today/task/thirdStatus/:id', TodoController.thirdStatus);

router.put('/today/task/fourthStatus/:id', TodoController.fourthStatus);

//get today's tasks todo 
router.get('/today/tasks',TodoController.getAllTodaytodo);

router.get('/today/tasks/:id', TodoController.getAllTodaytodoByDep);

router.post('/addselectedtask', TodoController.addselectedtask)

//get today's tasks todo 
router.get('/today/status/:id', TodoController.getStatus);

module.exports = router;
