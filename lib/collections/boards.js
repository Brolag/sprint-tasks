// Set up board names.
Boards = [
    { name: 'To Do', tasks : [] },
    { name: 'In Progress', tasks : [] },
    { name: 'QA' , tasks : [] },
    { name: 'AT', tasks : [] },
    { name: 'Done', tasks : [] }
];

// Tasks collection.
Tasks = new Mongo.Collection("tasks");

// Set up all boards.
Boards.getAll = function(){
    this.fillBoards();
    return this;
};

// Fill board with tasks.
Boards.fillBoards = function() {
  _.each(this, function(board, key) {
        board.tasks = Tasks.getTasks(key);
    });
};

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

