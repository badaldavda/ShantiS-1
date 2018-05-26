//Meteor.subscribe('jobCreation');
Template.alljobs.onCreated(function(){
let template = Template.instance();

template.autorun(function(){
	var id = template._id;
	console.log(id);
	template.subscribe('jobCreation');
	template.subscribe('dODetailsAll');
	template.subscribe('originalDocAll');
	template.subscribe('yardDetailsAll');
	template.subscribe('deliveryDetailsAll');
	template.subscribe('iGMDetailsAll');
	template.subscribe('beDetailsAll');
  template.subscribe('billingDetailsAll');
});
});

Template.alljobs.helpers({
    alljobs:() => AllJobsIndex,
		attributes: function () {
    return {
       type: 'search',
       placeholder: 'Search Here...',
			 autocomplete: "off",
			 class: 'form-control input-sm'

		 };
	 }
});
