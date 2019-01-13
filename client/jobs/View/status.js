Template.status.onCreated(function(){

var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('jobCreationOne',id);

	self.subscribe('dODetails',id);
	self.subscribe('originalDoc',id);
	self.subscribe('yardDetails',id);
	self.subscribe('deliveryDetails',id);
	self.subscribe('iGMDetails',id);
	self.subscribe('beDetails',id);
    self.subscribe('billingDetails',id);
self.subscribe('partyMasterDetailsOneEmail',id);


		//self.subscribe('partyMasterDetailsOne',Session.get('importer'));
});
});

Template.status.helpers({
	vessel:function(){
		var id = FlowRouter.getParam('id');
		Meteor.call('updateCompletedJobField',id);
    	ves = IGMDetails.findOne({JobId:id},{fields:{InwardDate:1}});
    	//console.log(ves);
    	if(typeof ves == 'undefined' || ves.InwardDate == '' )
    	{
    		return true;
    	}
    	else{return false;}


	},
	orD:function(){
		var id = FlowRouter.getParam('id');
    	orDoc = OriginalDoc.findOne({JobId:id},{fields:{OrRec:1}});
    	//console.log(orDoc);
    	if(typeof orDoc == 'undefined')
    	{
    		return true;
    	}
    	else{return false;}

	},
	DOCollected:function(){
		var id = FlowRouter.getParam('id');
    	DOCol = DODetails.findOne({JobId:id},{fields:{DOCollectedBy:1}});
    	//console.log(DOCol);
    	if(typeof DOCol == 'undefined' || DOCol.CollectedBy=='')
    	{
    		return true;
    	}
    	else{return false;}
	},
	Arr:function(){
		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	contAr = YardDetails.findOne({JobId:id},{fields:{ContainerArr:1}});
    	//console.log(contAr);
    	if(typeof contAr == 'undefined' || contAr.ContainerArr=='')
    	{
    		return true;
    	}
    	else{return false;}

	},
	thoka:function(){

		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	th = BeDetails.findOne({JobId:id},{fields:{No:1}});
    	//console.log(th);
    	if(typeof th == 'undefined' || th.No=='')
    	{
    		return true;
    	}
    	else{return false;}
	},
	dutyPaid:function(){

		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	dd = BeDetails.findOne({JobId:id},{fields:{DutyDate:1}});
    	console.log(dd);
    	if(typeof dd == 'undefined' || dd.DutyDate == '')
    	{
    		return true;
    	}
    	else{return false;}
	},
	delivery:function(){
		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	del = DeliveryDetails.findOne({JobId:id},{fields:{DeliveryOutOn:1}});
    	console.log(del);
    	if(typeof del == 'undefined' || del.DeliveryOutOn == '')
    	{
    		return true;
    	}
    	else{return false;}
	},
	bill:function(){
		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	bil = BillingDetails.findOne({JobId:id},{fields:{CourierDate:1}});
    	console.log(bil);
    	if(typeof bil == 'undefined' || bil.CourierDate == '')
    	{
    		return true;
    	}
    	else{return false;}
	}
});

Template.status.events({
	'click #btnEmail':function(e)
	{
		var id = FlowRouter.getParam('id');
			ves = IGMDetails.findOne({JobId:id},{fields:{InwardDate:1}});
			orDoc = OriginalDoc.findOne({JobId:id},{fields:{OrRec:1,OrRecDate:1}});
			DOCol = DODetails.findOne({JobId:id},{fields:{Charges:1}});
			contAr = YardDetails.findOne({JobId:id},{fields:{ContainerArr:1}});
			th = BeDetails.findOne({JobId:id},{fields:{No:1}});
			dd = BeDetails.findOne({JobId:id},{fields:{DutyDate:1}});
			del = DeliveryDetails.findOne({JobId:id},{fields:{DeliveryOutOn:1}});
			bil = BillingDetails.findOne({JobId:id},{fields:{CourierDate:1}});
			job1 = JobCreation.findOne({_id:id});
			console.log(job1);
			partyemail = PartyMasterDetails.findOne({"ClientName":job1.ImporterName},{fields:{Email:1}});
			console.log(partyemail.Email);
			var subject = "Update for Job No. "+job1.JobNo;
			var body = "Hello,\n\nFollowing is the status update for Job No. "+job1.JobNo+"\n\n";

			if(typeof ves == 'undefined' || ves.InwardDate == '')
			{
				body += "Vessel Arrived - Not Yet\n";
			}
			else{
				body += "Vessel Arrived - Yes ("+ves.InwardDate+")\n";
			}
			if(typeof orDoc == 'undefined')
    	{
    		body += "Original Documents Received - Not Yet (Kindly do the needful)\n";
    	}
    	else{
				body += "Original Documents Received - Yes ("+orDoc.OrRecDate+")\n";
		}
		if(typeof DOCol == 'undefined' || DOCol.CollectedBy=='')
		{
			body += "Delivery Order Collected - Not Yet\n";
		}
		else{body += "Delivery Order Collected - Yes\n";}
		if(typeof contAr == 'undefined' || contAr.ContainerArr=='')
		{
			body += "Container Arrived - Not Yet\n";
		}
		else{body += "Container Arrived - Yes ("+contAr.ContainerArr+")\n";}
		if(typeof th == 'undefined' || th.No=='')
		{
			body += "Thoka Done - Not Yet\n";
		}
		else{body += "Thoka Done - Yes(Thoka No. -"+th.No+")\n";}
		if(typeof dd == 'undefined' || dd.DutyDate == '')
		{
			body += "Duty Paid - Not Yet\n";
		}
		else{body += "Duty Paid - Yes("+dd.DutyDate+")\n";}
		if(typeof del == 'undefined' || del.DeliveryOutOn == '')
		{
			body += "Delivery Out - Not Yet\n";
		}
		else{body += "Delivery Out - Yes(On - "+del.DeliveryOutOn+")\n";}

		body += "\n\nThanks and Regards,\nShanti Shipping"
			body = encodeURIComponent(body);


			var vesComp = !(typeof ves == 'undefined' || ves.InwardDate == '');
			var orDocComp = !(typeof orDoc == 'undefined');
			var DOColComp = !(typeof DOCol == 'undefined' || DOCol.CollectedBy=='');
			var contArrComp = !(typeof contAr == 'undefined' || contAr.ContainerArr=='');
			var thComp = !(typeof th == 'undefined' || th.No=='');
			var ddComp = !(typeof dd == 'undefined' || dd.DutyDate == '');
			var delComp = !(typeof del == 'undefined' || del.DeliveryOutOn == '');
			var bilComp = !(typeof bil == 'undefined');

			// console.log("vesComp: ");
			// console.log(vesComp);
			//
			// console.log("orDocComp: ");
			// console.log(orDocComp);
			//
			// console.log("DOColComp: ");
			// console.log(DOColComp);
			//
			// console.log("contArrComp: ");
			// console.log(contArrComp);
			//
			// console.log("thComp: ");
			// console.log(thComp);
			//
			// console.log("ddComp: ");
			// console.log(ddComp);
			//
			// console.log("delComp: ");
			// console.log(delComp);
			//
			// console.log("bilComp: ");
			// console.log(bilComp);


			var completed = vesComp && orDocComp && DOColComp && contArrComp && thComp && ddComp && delComp && bilComp;

	    console.log(completed)

		e.preventDefault();
		console.log(subject);
		console.log(body);
		var href = "mailto:"+partyemail.Email+"?Subject="+subject+"&body="+body;
		//window.location.href = href;
		window.open(href,'_blank');
	},
});
