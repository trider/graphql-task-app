
const { gql } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, graphqlSync } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar GraphQLObjectId
  scalar JSON
  scalar Date


  

  type Query {

    getTasks(payload:JSON): JSON
  

  }



  type Mutation {
    
    # InState
    inStateLogin(payload:JSON): JSON
    inStateRun(key:String, role:String, command:String, payload:JSON): JSON
    inStateRunToken(key:String, role:String, command:String, payload:JSON): JSON

    
    
    # Member
    memberLogin(payload:JSON):JSON
    memberUpdate(payload:JSON):JSON
    memberUpdateOnboarding(payload:JSON):JSON
    memberRegister(payload:JSON):JSON
    memberRegisteUpdate(memberId:String, key:String, payload:JSON):JSON
    memberOnboard(payload:JSON): JSON
    memberUpdateRisk(payload:JSON):JSON
    memberUpdateProfile(payload:JSON):JSON
    memberCrmCreate(payload:JSON): JSON
    memberCrmUpdate(payload:JSON): JSON
    memberCrmDelete(payload:JSON): JSON
    memberCrmOnboarding(payload:JSON): JSON
    memberDataUpdate(payload:JSON): JSON
    memberDataUpdateById(payload:JSON): JSON
    memberRequestsProcess(payload:JSON): JSON
    memberRequestsProcessLaunch(payload:JSON): JSON
    memberRequestsProcessLaunchLoan(payload:JSON): JSON
    memberRequestSave(payload:JSON): JSON
    memberUploadOnboardingFile(payload:JSON): JSON
    memberLoanRegister(payload:JSON): JSON
    memberOnboaringRequestGenerate(payload:JSON): JSON
    memberOnboaringRequestGenerateUser(payload:JSON): JSON
    memberRunAutomationCommand(payload:JSON):JSON
    memberUpdateDlt(payload:JSON): JSON
    updateAccountRisk(payload: JSON): JSON
    memberCoreBankingTransactionRun(payload:JSON): JSON
    importLenderData(payload:JSON):JSON 
    memberBusinessAnalysisGenerate(payload:JSON): JSON


    #TODO: Annotate 
    runOperatorCommandMember(payload:JSON): JSON
    runOperatorCommandMemberPayload(payload:JSON): JSON
    investMemberFund(payload:JSON):JSON 
    runFlowableCommandMember(path: String, authorization: String, payLoad: JSON):JSON
    memberPortfolioAnalysisGenerate(path:String, payload:JSON):JSON 
    runPurchasesMember(payload:JSON): JSON
    generateTrackMember(payload:JSON): JSON
    riskTicketUpdateMember(payload:JSON): JSON
    memberTokenizeLoan(payload:JSON): JSON
    memberTokenizeLoans(payload:JSON): JSON
    memberAnalysisAdjustmentsGenerate(payload:JSON): JSON
    memberAnalysisAdjustmentsUpdate(payload:JSON): JSON
    memberLenderAnalysisUpdateLoans(payload:JSON): JSON
    memberLenderAnalysisUpdateLoanTransactions(payload:JSON): JSON
    memberLenderAnalysisLoansAdd(payload:JSON): JSON
  

    # encryption
    memberCredentialsEncrypt(payload:JSON): JSON
    memberCredentialsDecrypt(payload:JSON): JSON
    
    # Operator
    operatorLogin(payload:JSON):JSON
    operatorUpdate(payload:JSON):JSON
    operatorRunAutomationCommand(payload:JSON):JSON
    operatorSetLoanOriginationPreferences(payload: JSON): JSON
    operatorSetLoanOriginationPreference(payload: JSON): JSON
    runOperatorCommand(path: String, payload: JSON): JSON
    operatorRunAnalysis(payload: JSON):JSON
    operatorRunProcess(payload: JSON):JSON
    operatorRequestManage(payload: JSON):JSON
    operatorRequestManageDlt(payload: JSON):JSON
    operatorRequestRun(payload: JSON):JSON
    operatorOnboardingReview(payload: JSON):JSON
    operatorRequestReject(payload: JSON):JSON
    operatorUserReview(payload: JSON):JSON
    operatorRequestTokenGenerate(payload: JSON):JSON
    operatorRequestRelatedUpdate(payload: JSON):JSON
    operatorRequestExecuteRepay(payload: JSON):JSON
    updateOperatorPreferences(payload:JSON): JSON
    operatorGenerateOfferPnote(payload:JSON): JSON
    setProducts(payload:JSON): JSON
    updateOperatorDltNetworkAccountMemberObligations(payload:JSON): JSON
    updateAnalyses(account: String): JSON
    generateAnalyses(payload:JSON):JSON
    updateAnalysisData(payload:JSON):JSON

    #TODO: Annotate 
    runOperatorCommandPayload(path: String, payload: JSON): JSON
    generateAssetProfiles(payload:JSON):JSON
    runFlowableCommandOperator(path: String, authorization: String, payLoad: JSON):JSON
    operatorCrmCreate(payload:JSON): JSON
    operatorCrmUpdate(payload:JSON): JSON
    operatorCrmDelete(payload:JSON): JSON
    updateOperatorAnalysesList(payload:JSON): JSON
    operatorAnalysisAdjustmentsGenerate(payload:JSON): JSON
    operatorAnalysisAdjustmentsUpdate(payload:JSON): JSON
    operatorRunAnalysisNetwork(payload:JSON): JSON
    operatorPayoutFunds(payload:JSON): JSON
    operatorPayoutPNotes(payload:JSON): JSON
    operatorPayoutSNotes(payload:JSON): JSON
    operatorAnalysisVectorsManage(payload:JSON): JSON
    accessEndpoint(payload:JSON): JSON
    
    

    # Position
    generatePositionData(payload:JSON):JSON
    updatePositionAllocations(payload:JSON):JSON

    #odoo
    odooLogin(payload: JSON): JSON
    odooCreate(payload: JSON): JSON
    odooUpdate(payload: JSON): JSON
    odooDelete(payload: JSON): JSON
   
    # Legacy
    runItem(account: String!, api: String!, path: String!): JSON
    postItem(account: String, api: String, path: String, payload: JSON): JSON


    # Operator
    runAnalysis(analysis:String): JSON
    runFilters(account: String!, path: String): JSON
    manageFilter(payload: JSON): JSON
    manageAction(payload: JSON): JSON
    manageVector(payload: JSON): JSON
    manageValuation(payload: JSON): JSON
    generateScenario(account: String!, path: String): JSON
    runAnalyticsScenario(account: String, id: String, filterId:String, target: String): JSON
    generateQuote(path: String, payload: JSON): JSON
    generateQuoteTicket(path: String, accountId: String, term: String, principal: String, purpose: String ): String
    generateQuoteFlow(path: String, accountId: String, term: String, principal: String, purpose: String ): JSON
    generateQuoteAuth(path: String, authorization:String, payload: JSON): JSON
    manageQuote(id:String, action:String): JSON
    updateQuote(payload:JSON): JSON
    generatePNote(payload:JSON): JSON
    generatePNoteAnalysis(path: String): JSON
    generateLoanSale(path: String, payload: JSON): JSON
    managePNote(id:String, action:String): JSON
    generateLenderAnalysis(path: String, payload: JSON): JSON
    generateLenderAnalysisLoanSale(path: String, payload: JSON): JSON
    generateLenderAnalysisLoanBook(path: String, loanBook:String, account: String): JSON
    setLoanOriginationPreferences(path: String, payload: JSON): JSON
    updateMemberDltAccountUpecos(payload: JSON): JSON
    validateMemberEmail(payload: JSON): JSON


    # mastercard
    mcAuthenticateClient(payload:JSON):JSON
    mcSendRequest(payload:JSON):JSON
    mcSendRequestMember(payload:JSON):JSON
    
    # DLT
    issueRequest(payload:JSON):JSON
    transferCash(payload:JSON):JSON
    retireRequest(payload:JSON):JSON
    updateDLTDataFull(payload:JSON):JSON
    
    # Flowable
    flowableLogin(path:String, body:String): String
    flowableRunCommand(path: String, authorization: String, payLoad: JSON): JSON
    flowableUpdateCommand(path: String, authorization: String, payLoad: JSON): JSON
    flowableRunCommandNotifications(
      notification:JSON,
      path: String, 
      authorization: String, 
      payLoad: JSON
    ): JSON
    flowableRunCommandExecution(
      notification:JSON,
      path: String, 
      authorization: String, 
      payLoad: JSON
    ): JSON
    #TODO: Annotate 
    flowableCancelCommand(path: String, authorization: String): JSON



    # Mongo
    writeMongoData(db:String, collection:String, data:JSON):JSON  
    writeMongoObjects(db:String, collection:String, data:JSON):JSON
    importMongoData(db:String, collection:String, memberId:String,  loanBook:String, payload:JSON):JSON  
    replaceMongoData(db:String, collection:String, query:JSON, payload:JSON):JSON 
    updateMongoData(db:String, collection:String, query:JSON, payload:JSON):JSON 
    persistMongoData(db:String, collection:String, data:JSON):JSON 
    updateMongoObjects(db:String, collection:String, query:JSON, payload:JSON):JSON
    deleteMongoData(db:String, collection:String, query:JSON, payload:JSON):JSON
    deleteMongoObjects(db:String, collection:String, query:JSON, payload:JSON):JSON
    updateMongoDataId(db:String, collection:String, field:String, id:String, payload:JSON):JSON
    updateMongoObjectsId(db:String, collection:String, field:String, id:String, payload:JSON):JSON
    deleteMongoDataId(db:String, collection:String, field:String, id:String, payload:JSON):JSON
    deleteMongoObjectsId(db:String, collection:String, field:String, id:String, payload:JSON):JSON
    
    # Portfolio

    """
    Retrieves portfolio related plaid tokens
    """  
    generateTokens( tokenInput:PlaidToken ):JSON

    """
    Generates new portfolio analysis
    """  
    generatePortfolio(path:String, payload:JSON):JSON

    """
    Runs ticket action
    """  
    runTickets( path:String, payload:JSON ):JSON
  

  
  }


`;

module.exports = typeDefs;