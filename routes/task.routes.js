module.exports = (app) => {
  const tasks = require('../controllers/task.controller.js');

  var router = require('express').Router();

  // Create a new Task
  router.post('/:userid/tasks/', tasks.create);

  // Retrieve all Tasks
  router.get('/:userid/tasks/', tasks.findAll);

  // Retrieve a single Task with id
  router.get('/:userid/tasks/:id', tasks.findOne);

  // Update a Task with id
  router.put('/:userid/tasks/:id', tasks.update);

  // Delete a Task with id
  router.delete('/:userid/tasks/:id', tasks.delete);

  app.use('/api/users', router);
};
