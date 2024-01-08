const express = require("express");
const port = 8081;
const app = express();
let todoList = ["Complete Node Byte", "Play Cricket"];

app.use(express.json());

// app.get("/todos", function (req, res) {
//   res.send(todoList);
// });

app.get("/user/todos", (request, response) => {
  response.send(todoList);
});

app.get("/todos", (request, response) => {
    const redirectLocation = `/user/todos`;
    response.set("Location", redirectLocation);
    response.status(302).send();
});


// app.post("/todos", function (req, res) {
//   let newTodo = req.body.name;
//   todoList.push(newTodo);
//   res.status(201).end();
// });

// app.delete("/todos", function (req, res) {
//   let deleteTodo = req.body.name;
//   console.log(deleteTodo);
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i] === deleteTodo) {
//       todoList.splice(i, 1);
//       res.status(204).end();
//     }
//   }
// });

// app.all("/todos", (req, res) => {
//   res.status(501).end();
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<Custom 404 message>");
// });

app.listen(port, function () {
  console.log(`Nodejs server started on port ${port}`);
});
