Template.searchtransportmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('transportMasterDetails');
});
});

Template.searchtransportmaster.helpers({
  transportIndex: () => TransportMasterIndex,
  attributes: function () {
  return {
     type: 'search',
     placeholder: 'Search Here...',
     autocomplete: "off",
     class: 'form-control input-sm'

   };
 }
});

Template.searchtransportmaster.events({
  'click #btnUpdateTransport':function(e)
  {
    console.log(this._id);

    var id = this._id;

    FlowRouter.go("/:id/UpdateTransport",{id:id});

  }
});
