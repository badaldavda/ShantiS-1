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
