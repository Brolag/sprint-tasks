if (Meteor.isClient) {
    Template.body.events({
        "click .task-delete": function (event) {
            event.preventDefault();
            var id = event.currentTarget.getAttribute('data-id');
            Tasks.deleteTask({
                _id: id
            });
        },

        "click .task-move": function (event) {
            event.preventDefault();
            var board = parseInt(event.currentTarget.getAttribute('data-board'));
            var id = event.currentTarget.getAttribute('data-id');
            if (board < 4) {
                Tasks.moveTask({
                    _id : id,
                    board : board + 1
                });
            }
        }
    });
}