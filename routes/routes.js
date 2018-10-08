const appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome!");
  });

  app.get("/user", function(req, res) {
    let data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      email: faker.internet.email()
    };
    res.status(200).send(data);
  });

  app.get("/users/:num", function(req, res) {
    let users = [];
    console.log(req.params)
    let num = req.params.num; //NU INTELEG ASTA

    if (isFinite(num) && num > 0) {
      for (i = 0; i <= num - 1; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          userName: faker.internet.userName(),
          email: faker.internet.email()
        });
      }

      res.status(200).send(users);
    } else {
      res.status(400).send({ message: "Invalid number input" });
    }
  });

  app.put("/",function(req,res){
    res.json({"message": "works"})
  })
};

const faker = require("faker");

module.exports = appRouter;
