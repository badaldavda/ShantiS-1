Meteor.methods({
	'updateDeliveryDoc':function(id)
	{
		DeliveryDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'updateDockDocsDoc':function(id){
		DocDocks.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'shipDetailsUpdateMethod':function(id){
		ShippingDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'DODetailsUpdateMethod':function(id){
		DODetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'stampDutyFormUpdateMethod':function(id){
		StampDutyDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'beDetailsUpdateMethod':function(id){
		BeDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'iGMDetailsUpdateMethod':function(id){
		IGMDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'yardDetailsUpdateMethod':function(id){
		YardDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'fssaiDetailsUpdateMethod':function(id){
		FssaiDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'pqDetailsUpdateMethod':function(id){
		PqDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'textileDetailsUpdateMethod':function(id){
		TextDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'updatebillDoc':function(id){
		BillingDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'updateJob':function(id){
		JobCreation.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},

	'updateCompletedJobField':function(id){
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

    var vesComp = !(typeof ves == 'undefined' || ves.InwardDate == '');
    var orDocComp = !(typeof orDoc == 'undefined');
    var DOColComp = !(typeof DOCol == 'undefined' || DOCol.CollectedBy=='');
    var contArrComp = !(typeof contAr == 'undefined' || contAr.ContainerArr=='');
    var thComp = !(typeof th == 'undefined' || th.No=='');
    var ddComp = !(typeof dd == 'undefined' || dd.DutyDate == '');
    var delComp = !(typeof del == 'undefined' || del.DeliveryOutOn == '');
    var bilComp = !(typeof bil == 'undefined');

    var completed = vesComp && orDocComp && DOColComp && contArrComp && thComp && ddComp && delComp && bilComp;

    console.log(completed)

    if(completed){
      JobCreation.update({_id:id},{$set:{"status":"Complete"}});
    }
		else{
			JobCreation.update({_id:id},{$set:{"status":"Incomplete"}});
		}

	}
});
