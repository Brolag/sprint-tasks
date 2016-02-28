if (Meteor.isClient) {
    Template.boards.helpers({
        boards: Boards.getAll()
    });

    Template.body.events({
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var task = event.target.task.value;

            // Insert a task into the collection
            Tasks.addTasks({
                name: task
            });

            // Clear form
            event.target.task.value = "";
        }
    });
}


