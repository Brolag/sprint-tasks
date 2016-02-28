Boards = [
    {
        name: 'To Do',
        tasks: [
            { title : 'Create prototype' },
            { title : 'Create MongoDB structures' }

        ]
    },
    {
        name: 'In Progress',
        board: [
            { title : 'Deploy application' }
        ]
    },
    {
        name: 'QA',
        board: []
    },
    {
        name: 'AT',
        board: []
    },
    {
        name: 'Done',
        board: []
    }
];

Boards.getAll = function(){
    return this;
};
