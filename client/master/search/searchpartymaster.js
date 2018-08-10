Template.searchpartymaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('partyMasterDetails');
});
});

Template.searchpartymaster.helpers({
  partyIndex: () => PartyMasterIndex,
  attributes: function () {
  return {
     type: 'search',
     placeholder: 'Search Here...',
     autocomplete: "off",
     class: 'form-control input-sm'

   };
 }
});

Template.searchpartymaster.events({
  'click #btnUpdateParty':function(e)
  {
    console.log(this._id);

    var id = this._id;

    e.preventDefault();

    FlowRouter.go("/:id/updateParty",{id:id});
    //var id = FlowRouter.getParam('id');
    //
    //FlowRouter.go("/:id/updatejob",{id:id});

  },
});
