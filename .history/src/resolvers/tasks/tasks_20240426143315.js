
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');

const loanFields = [
 'acc_now_delinq','collection_recovery_fee','collections_12_mths_ex_med',
	'delinq_2yrs','dti','dti_joint','grade','home_ownership',
	'inq_last_6mths','last_pymnt_amnt','mths_since_last_delinq','mths_since_last_major_derog',
	'mths_since_last_record','mths_since_rcnt_il',
	'open_acc','open_acc_6m','open_il_12m','open_il_24m','open_il_6m','open_rv_12m','open_rv_24m','out_prncp',
	'out_prncp_inv','policy_code','pub_rec','recoveries','revol_bal','revol_util','tot_coll_amt',
 'tot_cur_bal','total_acc','total_bal_il','total_cu_tl','total_pymnt_inv','total_rec_int',
	'total_rec_late_fee','total_rec_prncp','total_rev_hi_lim'
]








const getLoanValues = (args,loanBook) => {
	let loans = []
	for(let item of args.payload){
		
		let loan = {}
	
		const objectArray = Object.entries(item);
		objectArray.forEach(([key, value]) => {
				value = value.replace('"','').replace(',','').trim()
			 if(key === 'id'){
					value = parseInt(value)
				}
				else if(key === 'int_rate'||key ==='installment'){
					value = parseFloat(value)
				}
				else if(key==='loan_amnt'||key==='funded_amnt'||key==='annual_inc'||key==='funded_amnt_inv' || key==='total_pymnt'){
						value = parseFloat(value.replace(',','').trim())
				}
				else {
					value = value
				}
			loan[key]=value
		});
		loan.memberId=args.memberId
		loan.loanBook=ObjectID(loanBook[0]._id)
		console.log(loan.id, ', added' )
		loans.push(loan)
	}
	return loans
}

const mongo = {

	Query: {
  getMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.getItemData(args).catch(error => {
    console.log(error)
  });
		},
  getMongoObjects: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.getItemsData(args).catch(error => {
				console.log(error)
  });
		},
		// fix it
		getMongoDataByID: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.getItemDataByID(args).catch(error => {
    console.log(error)
  });
		
	},
	getMongoObjectsByID: async (parent, args, { dataSources }, context) => {
		return dataSources.mongoAPI.getItemObjectsByID(args).catch(error => {
			console.log(error)
	});
	
},


	},
 Mutation: {
  writeMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.writeItemData(args)
		},
  writeMongoObjects: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.writeItemsData(args)
		},
		importMongoData: async (parent, args, { dataSources }, context) => {
				return dataSources.mongoAPI.writeItemsData({
						db:args.db,
						collection:args.collection,
						data:getLoanValues(args)
			}).then((data) => {
				return { 
						status:'success',
						total:args.payload.length
				}
		}).catch((err) => {
			console.log('err')
			return { 
				status:'failed',
				total:0
		}
			})
		},



		persistMongoData: async (parent, args, { dataSources }, context) => {
			const saveData = new Promise((resolve) => {
				dataSources.mongoAPI.updateItemsData( {
					db:args.db,
					collection:args.collection,
					query:{ isUpdate: false },
					payload:{ isUpdate: true }
			}).then((data, err) => resolve(data))
			}).then(() => {
				return dataSources.mongoAPI.writeItemsData({
							db:args.db,
							collection:args.collection,
							data:args.data
					})
			}).then(() => {
				return dataSources.mongoAPI.deleteItemsData({
					db:args.db,
					collection:args.collection,
					query:{isUpdate: true}
				})
			}).then(() => {
				return dataSources.mongoAPI.getItemsData({
					db:args.db,
					collection:args.collection,
					query:{}
			})
			}).catch((err) => {
				console.log('err')
			})
			return saveData.then(data => data).catch((err) => console.log('err'))
		},
  replaceMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.replaceItemData(args)
		},
		updateMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.updateItemData(args)
		},
		updateMongoDataId: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.updateItemDataId(args)
		},
		
		updateMongoObjects: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.updateItemsData(args)
		},
		updateMongoObjectsId: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.updateItemsDataId(args)
		},
  deleteMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.deleteItemData(args)
		},
		deleteMongoDataId: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.deleteItemDataId(args)
		},
  deleteMongoObjects: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.deleteItemsData(args)
		},
		deleteMongoObjectsId: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.deleteItemsDataId(args)
		},
  
		


	},


};

module.exports = mongo;