Boards = [
    {
        name: 'To Do',
        tasks: []
    },
    {
        name: 'In Progress',
        tasks: []
    },
    {
        name: 'QA',
        tasks: []
    },
    {
        name: 'AT',
        tasks: []
    },
    {
        name: 'Done',
        tasks: []
    }
];

Boards.getAll = function(){
    return this;
};

Boards.addTask = function(task){
    if (_.isString(task.name) && !_.isEmpty(task.name)) {
        Boards[0].tasks.push(task);
        console.log('Task ' + task.name + ' was crated.' )
    }
};
