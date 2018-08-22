Template.updateTransport.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('transportMasterDetails');
});
});

Template.updateTransport.helpers({
transportDoc:function(){
  var id = FlowRouter.getParam('id');
  id1 = TransportMasterDetails.findOne({_id:id});
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

AutoForm.addHooks('TransportMasterDetailsUpdate', postHooks);
