Template.searcheyardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('emptyYardMasterDetails');
});
});

Template.searcheyardmaster.helpers({
  eyardIndex: () => EmptyYardMasterIndex,
  attributes: function () {
  return {
     type: 'search',
     placeholder: 'Search Here...',
     autocomplete: "off",
     class: 'form-control input-sm'

   };
 }
});

Template.searcheyardmaster.events({
  'click #btnUpdateEmptyYard':function(e)
  {
    console.log(this._id);

    var id = this._id;

    FlowRouter.go("/:id/UpdateEmptyYard",{id:id});

  }
});
