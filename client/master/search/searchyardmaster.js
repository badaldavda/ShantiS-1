Template.searchyardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('yardMasterDetails');
});
});

Template.searchyardmaster.helpers({
  yardIndex: () => YardMasterIndex,
  attributes: function () {
  return {
     type: 'search',
     placeholder: 'Search Here...',
     autocomplete: "off",
     class: 'form-control input-sm'

   };
 }
});

Template.searchyardmaster.events({
  'click #btnUpdateYard':function(e)
  {
    console.log(this._id);

    var id = this._id;

    FlowRouter.go("/:id/UpdateYard",{id:id});

  }
});
