Template.searchshippingmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('shippingMasterDetails');
});
});

Template.searchshippingmaster.helpers({
  shippingIndex: () => ShippingMasterIndex,
  attributes: function () {
  return {
     type: 'search',
     placeholder: 'Search Here...',
     autocomplete: "off",
     class: 'form-control input-sm'

   };
 }
});

Template.searchshippingmaster.events({
  'click #btnUpdateShipping':function(e)
  {
    console.log(this._id);

    var id = this._id;

    FlowRouter.go("/:id/updateShipping",{id:id});

  }
});
