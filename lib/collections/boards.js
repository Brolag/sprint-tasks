// Set up board names.
Boards = [
    { name: 'To Do', tasks : [] },
    { name: 'In Progress', tasks : [] },
    { name: 'QA' , tasks : [] },
    { name: 'AT', tasks : [] },
    { name: 'Done', tasks : [] }
];

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

