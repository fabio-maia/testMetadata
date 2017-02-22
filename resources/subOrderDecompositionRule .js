[{
		"Rule_Customer_Create" : {
			"name" : "Rule_Customer_Create"
			"scope" : "//orderDetail/customer"
			"matchScript" : "if (//customer[@custType = 'RESIDENTIAL' and @action = 'CREATE']) {
										return true;
									 }
									 else {
										 return false;
									 }"
			"subOrder" : "Customer_Create"

		},
		"Rule_Customer_Update" : {
			"name" : "Rule_Customer_Update"
			"scope" : "orderDetail\customer"
			"matchScript" : "if (//customer[@custType = 'RESIDENTIAL' and @action = 'UPDATE']) {
										return true;
									 }
									 else {
										 return false;
									 }"
			"subOrder" : "Customer_Update"
		},
		"Rule_BillingAccount_Create" : {
			"name" : "Rule_BillingAccount_Create"
			"scope" : "//orderDetail/billingAccountList/billingAccount"
			"matchScript" : "if (//billingAccount[@accountType = 'BILLING' and @accountStatus = 'ACTIVE']) {
										return true;
									 }
									 else {
										 return false;
									 }"
			"subOrder" : "BAN_Create"
		},
		"Rule_LOS_Create" : {
			"name" : "Rule_LOS_Create"
			"scope" : "//orderDetail/servicesList/service"
			"matchScript" : "if (//service[@action = 'CREATE']) {
										return true;
									 }
									 else {
										 return false;
									 }"
			"subOrder" : "LoS_Create"
		}
	}
]
