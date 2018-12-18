Template.jobDetails.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('jobCreationOne',id);
});
});

Template.jobDetails.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id});
		//console.log(job1.PGASEL);
		Session.set('PGASELVAL',job1.PGASEL);
		return job1;
	},
	});

	Template.jobDetails.events({
		'click #btnUpdateJob':function(e)
		{
			var id = FlowRouter.getParam('id');
			e.preventDefault();
			FlowRouter.go("/:id/updatejob",{id:id});

		},
	});
