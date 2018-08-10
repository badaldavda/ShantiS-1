Template.updateShipping.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('shippingMasterDetails');

});
});

Template.updateShipping.helpers({
shippingDoc:function(){
  var id = FlowRouter.getParam('id');
  id1 = ShippingMasterDetails.findOne({_id:id});
  //console.log(id1._id)
  return id1;
}
});

var postHooks = {
	before: {
     insert: function(doc) {
     	doc.ScoName = doc.ScoName.toUpperCase();
      	//console.log(doc.ScoName);
      return doc;
     }
   }
}

AutoForm.addHooks('ShippingMasterDetailsUpdate', postHooks);
