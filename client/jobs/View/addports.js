Template.addports.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('ports');
});
});