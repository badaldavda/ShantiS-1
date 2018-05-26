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

/*Template.searchpartymaster.events({
	'click h4': function(){
		Session.set('showOther', !Session.get('showOther'));
	}
});*/
