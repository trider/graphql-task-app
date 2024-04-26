const { MongoClient } = require('mongodb');

// analytics
const AccountsAPI = require('./analytics/accounts');
const OperatorAPI = require('./analytics/operator');
const CollateralAPI = require('./analytics/collateral');
const WaterfallAPI = require('./analytics/waterfall');
const RiskAPI = require('./analytics/risk');
const BusinessAPI = require('./analytics/business');
const UserDB = require('./analytics/db');

// masercard
const MastercardAPI = require('./mastercard/mastercard')


// identity
const IdentityAPI = require('./identity/identity');

// banking
const BankingAPI = require('./banking/coreBanking');
const MemberBankingAPI = require('./banking/memberBanking');
const MifosBankingAPI =require('./banking/mifos')

// flowable
const FlowableAPI = require('./flowable/flowable');

// crm
const CRMAPI = require('./crm/crm')

// dlt
const DltAPI = require('./dlt/dlt');

// Registry
const RegistryAPI = require('./registry/registry')

// Mongo
const MongoAPI = require('./mongo/mongo');

// Investor
const PortfolioAPI = require('./portfolio/portfolio');

// Odoo
const OdooAPI = require('./odoo/odoo')



const DataSources = () => {
	return {
		accountsAPI: new AccountsAPI(),
		collateralAPI: new CollateralAPI(),
		operatorAPI: new OperatorAPI(),
		waterfallAPI: new WaterfallAPI(),
		riskAPI: new RiskAPI(),
		businessAPI: new BusinessAPI(),
		identityAPI: new IdentityAPI(),
		bankingAPI: new BankingAPI(),
		mifosBankingAPI: new MifosBankingAPI(),
		memberBankingAPI: new MemberBankingAPI(),
		flowableAPI: new FlowableAPI(),
		crmAPI: new CRMAPI(),
		dltAPI: new DltAPI(),
		registryAPI: new RegistryAPI(),
		mongoAPI: new MongoAPI(),
		portfolioAPI:new PortfolioAPI(),
		odooAPI:new OdooAPI(), 
		mastercardAPI:new MastercardAPI()

	}
}

module.exports = DataSources;