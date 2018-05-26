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
