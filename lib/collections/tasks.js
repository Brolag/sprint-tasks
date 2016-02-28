// Tasks collection.
Tasks = new Mongo.Collection("tasks");

// Get tasks of an specific board.
Tasks.getTasks = function(board) {
    return this.find({ board: board });
};

// Get tasks of an specific board.
Tasks.addTasks = function(taskData) {
    if (!_.isEmpty(taskData.name) && _.isString(taskData.name)) {
        var task = {
            name: taskData.name,
            weight: 0,
            createdAt: Date.now(),
            board: 0
        }
        this.insert(task);
        console.log("New task created: " + task.name);
    }
};

// Move task to the next board.
Tasks.moveTask = function(taskData) {
    this.update({_id: taskData._id}, {$set: {board: taskData.board}});
};

// Delete a task.
Tasks.deleteTask = function(taskData) {
    this.remove(taskData._id);
};


