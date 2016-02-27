var boards = [
    {
        name: 'To Do',
        tasks: [
            { title : 'Create prototype' },
            { title : 'Create MongoDB structures' },
            { title : 'Deploy application' }
        ]
    },
    {
        name: 'In Progress',
        board: []
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

Template.tasks.helpers({
    boards : boards
});