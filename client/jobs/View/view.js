Template.view.onCreated(function(){

var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('jobCreationOne',id);
});
});

Template.view.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');

    	console.log(id);
    	job1 = JobCreation.findOne({_id:id});
		console.log(job1.PGASEL);
		Session.set('PGASELVAL',job1.PGASEL);
		return job1;
	},
	pgaselfssai:function(){
		console.log(Session.get('PGASELVAL'))
			if(Session.get('PGASELVAL').indexOf('FSSAI')>-1)
				{return true;}
			return false;
			},
	pgaselpq:function(){
		if(Session.get('PGASELVAL').indexOf('PQ')>-1)
				{return true;}
			return false;
	},
	pgaseladc:function(){
		if(Session.get('PGASELVAL').indexOf('ADC')>-1)
				{return true;}
			return false;
	},
	pgaselwlro:function(){
		if(Session.get('PGASELVAL').indexOf('WLRO')>-1)
				{return true;}
			return false;
		},
	pgaseltextile:function(){
		if(Session.get('PGASELVAL').indexOf('TEXTILE')>-1)
				{return true;}
			return false;
	},
});

Template.view.events({
	'click #btnFSSAI':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		//console.log('hi');
		FlowRouter.go("/:id/fssai",{id:id});
	},

	'click #btnPQ':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/pq",{id:id});
	},

	'click #btnTXT':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/textile",{id:id});
	},
});
