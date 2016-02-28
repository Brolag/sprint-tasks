if (Meteor.isClient) {
    Template.boards.helpers({
        boards: Boards.getAll()
    });
}
