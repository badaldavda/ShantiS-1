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
