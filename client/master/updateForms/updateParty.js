Template.updateParty.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('partyMasterDetails');
});
});

Template.updateParty.helpers({
partyDoc:function(){
  var id = FlowRouter.getParam('id');
  id1 = PartyMasterDetails.findOne({_id:id});
  //console.log(id1._id)
  return id1;
}
});

var postHooks = {
	before: {
     insert: function(doc) {
     	doc.ClientName = doc.ClientName.toUpperCase();
      	//console.log(doc.ClientName);
      return doc;
     }
   }
}

AutoForm.addHooks('PartyMasterDetailsInsert', postHooks);
