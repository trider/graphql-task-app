
const { gql } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, graphqlSync } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar GraphQLObjectId
  scalar JSON
  scalar Date

  input FilterPayload  {
    field: String
    values: JSON
  }

  input AnalysisPayload {
    name: String!
    description: String!
    container: String!
    model: String!
    tool: String!
    target: String!
    subject: String!
    canEdit: Boolean
  }

    # Portfolio
    input PlaidToken {
    "String value that indicates name of client"
    client_name:String, 
    "String value that indicates Input language"
    language:String, 
    "Array of country codes"
    country_codes:JSON,
    "Array of products"
    products:JSON,
    "String value that indicates the source instituation for returned data"
    institution_id:String,
     "Interger value that indicates the number of days to include in an asset report"
    days_requested:Int
    "JSON opject that includes additional options, such as webhooks etc."
    options:JSON

  }

  input Item {
    "String value that indicates path of the Portfolio Engine endpoint"
    path:String, 
    "Sttring value that indicates the access token required to access the specified data"
    token:String

  }

  type Query {

  # InState
  inStateRead(key:String, role:String,  command:String, payload:JSON): JSON
  inStateReadToken(key:String, role:String,  command:String, payload:JSON): JSON
  
  # Member
  getMember(payload:JSON): JSON
  getMemberAnalysisData(payload:JSON): JSON
  getMemberAnalyses(payload:JSON): JSON
  getMemberLoanQuotes(payload:JSON): JSON
  getMemberLoanQuote(payload:JSON): JSON
  getMemberPNoteOffers(payload:JSON): JSON
  getMemberPNoteOffer(payload:JSON): JSON
  getMemberPNoteQuotes(payload:JSON): JSON
  getMemberNoteInvestments( payload:JSON ): JSON
  getMemberLenderAnalyses(payload:JSON ): JSON
  getMemberLenderAnalysis(payload:JSON): JSON
  getMemberLenderAnalysisLoanbooks(payload:JSON): JSON
  getMemberLenderAnalysisLoans(payload:JSON): JSON
  getMemberBusinessAnalyses(payload:JSON): JSON
  getMemberBusinessAnalysis(payload:JSON): JSON
  getMemberPortfolioAnalysis(payload:JSON): JSON
  getMemberRisk(payload:JSON): JSON
  getMemberPosition(payload:JSON): JSON
  getMemberTasks(payload:JSON): JSON
  getMemberCrmData(payload:JSON): JSON
  getMemberCrmAttachments(payload:JSON): JSON
  getMemberCrmDocuments(payload:JSON): JSON
  getMemberCrmMessages(payload:JSON): JSON
  getMemberCrmCalendar(payload:JSON): JSON
  getMemberMessages(payload:JSON): JSON
  #TODO: Annotate 
  getMongoObjectsByIDMember(payload:JSON):JSON
  getMemberNasdaqCompanies(payload:JSON):JSON  
  getMemberQBOCompanies(payload:JSON):JSON  
  getActivitiesMember(payload:JSON): JSON
  getActivityMember(payload:JSON): JSON
  getCachedDataMember(payload:JSON): JSON
  getMarketPlaceInvestmentsMember(payload:JSON): JSON
  getProductPayoutsMember(payload:JSON): JSON
  getProfilesMember(payload:JSON): JSON
  getPurchasesMember(payload:JSON): JSON
  getHoldingsFundsMember(payload:JSON): JSON
  getMemberTracksCustom(payload:JSON): JSON
  getMemberTrackCustom(payload:JSON): JSON
	getMemberAnalysisAdjustments(payload:JSON): JSON
  getMemberLoanVectorTicket(payload:JSON): JSON
  getMemberLoanSaleRequests(payload:JSON):JSON
  getMemberCrmQry(payload:JSON): JSON
  getMemberObjects(payload:JSON): JSON

  
  # DLT
  getMemberDlt(payload:JSON): JSON
  getMemberDLTData(payload:JSON): JSON
  getMemberDltAccount(payload:JSON): JSON
  getMemberLoanRequests(payload:JSON): JSON
  getMemberBankAccountsMifos(payload:JSON): JSON
  getMemberOnboardingRequest(payload:JSON):JSON 
  getMemberOnboardingRequestUser(payload:JSON):JSON
  getMemberOnboardingFile(payload:JSON):JSON
  getCategory(payload:JSON):JSON
  
  #TODO: Annotate 
  getDltCordaCashMember(payload:JSON): JSON
 
  # Operator
  getOperatorAllocations(payload:JSON): JSON
  getOperatorAnalysesList(payload:JSON): JSON
  getOperatorAutomationData(payload:JSON): JSON
  getOperatorAutomationQuery(payload:JSON): JSON
  getOperatorBankAccounts(payload:JSON): JSON
  getOperatorBankAccountsMifos(payload:JSON): JSON
  getOperatorBankProductsMifos(payload:JSON): JSON
  getOperatorBankAccountingMifos(payload:JSON): JSON
  getOperatorBankTransactionsMifos(payload:JSON): JSON
  getOperatorData(payload:JSON): JSON
  getOperatorDltNetwork(payload:JSON): JSON
  getOperatorDltNetworkDiagram(payload:JSON): JSON
  getOperatorDltNetworkAccounts(payload:JSON): JSON
  getOperatorDltNetworkAccountMembers(payload:JSON): JSON
  getOperatorDltNetworkAccountMemberObligations(payload:JSON): JSON
  getOperatorDltNetworkAccountMemberCash(payload:JSON): JSON
  getOperatorMemberData(payload:JSON): JSON
  getOperatorMembers(payload:JSON): JSON
  getOperatorNetworkAnalyses(payload:JSON): JSON
  getOperatorNetworkAnalysis(payload:JSON): JSON
  getOperatorNetworkAnalysisLoans(payload:JSON): JSON
  getOperatorNetworkAnalysisLoanTracks(payload:JSON): JSON
  getOperatorNetworkAnalysisLoan(payload:JSON): JSON
  getOperatorNetworkAnalysisScoreCard(payload:JSON): JSON
  getOperatorNetworkAnalysisSNotes(payload:JSON): JSON
  getOperatorNetworkAnalysisFundUnits(payload:JSON): JSON
  getOperatorNetworkAnalysisPricing(payload:JSON): JSON
  getOperatorMarketPlaceInvestments(payload:JSON): JSON
  getOperatorPosition(payload:JSON): JSON
  getOperatorPositions(payload:JSON): JSON
  getOperatorProductQuotes(payload:JSON): JSON
  getOperatorWaterfall(payload:JSON): JSON
  getOperatorWaterfallScenario(payload:JSON): JSON
  getOperatorWaterfallFundingTracks(payload:JSON): JSON
  getOperatorRiskTickets(payload:JSON): JSON
  getOperatorTaskRequests(payload:JSON): JSON
  getOpertorAnalysesByType(payload:JSON): JSON
  getOpertorAnalysesLoanRepayments(payload:JSON): JSON
  getOpertorProductPayouts(payload:JSON): JSON
  getOperatorsList(payload:JSON): JSON
  getOperatorPreferences(payload:JSON): JSON
  getAnalysisFilters(payload:JSON): JSON
  getAnalysisModels(payload:JSON): JSON
  getAnalysisVectorAdjustments(payload:JSON): JSON
  getAnalysisVectorTickets(payload:JSON): JSON
  getAnalysisVectorData(payload:JSON): JSON
  getAnalysisTickets(payload:JSON): JSON
  getAnalysisValuations(payload:JSON): JSON
  getOperatorBusinessAnalyses(payload:JSON): JSON
  getFlowableDataOperator(payload:JSON): JSON
  getflowableProcessDataOperator(payload:JSON ): JSON
  getFlowableProcessDiagramOperator(payload:JSON ): JSON
  getProductSet(payload:JSON): JSON
  getApiVersion(payload:JSON): JSON
  getOperatorQuery(payload:JSON): JSON
  getAnalysisFilterFieldValues(payload:JSON): JSON
  getOperatorAnalyses( payload:JSON ): JSON
  #TODO: Annotate 
  getOperatorHoldings( payload:JSON ): JSON
  getOperatorPooledFund( payload:JSON ): JSON
  getSuperVisorEvents(payload:JSON): JSON
  getOperatorNetworkAnalysisAssetProfile(payload:JSON): JSON
  getNotificationsOperator(payload:JSON): JSON
  getCachedDataOperator(payload:JSON): JSON
  getActivitiesOperator(payload:JSON): JSON
  getOperatorCrmData(payload:JSON): JSON
  getOperatorCrmAttachments(payload:JSON): JSON
  getOperatorCrmDocuments(payload:JSON): JSON
  getOperatorCrmMessages(payload:JSON): JSON
  getOperatorCrmCalendar(payload:JSON): JSON
  getOperatorMessages(payload:JSON): JSON
  getPositionOperator(payload:JSON): JSON
  getProfilesOperator(payload:JSON): JSON


  
  # Flowable
  getFlowableData(path: String, cookie:String, method:String): JSON
  getflowableProcessData(path: String, authorization: String ): JSON
  getFlowableProcessDiagram(path: String, authorization: String ): JSON
  getflowableProcessDataExecution(path: String, authorization: String ): JSON
  getflowableProcessDataMember(path: String, authorization: String, payload:JSON ): JSON
  postflowableProcessData(path: String, authorization: String, payload:JSON ): JSON
  postFlowableData(path: String, cookie: String, method: String, payload:JSON): JSON
  getFlowableThumbnail(path: String, cookie: String):JSON
  getFlowableUserTasks(path: String, cookie: String, payload: JSON): JSON

  # Mastercard
  mcGetRequest(payload:JSON):JSON

  # DLT
  getDLTData(path:String):JSON
  getDLTDataFull(payload:JSON):JSON
  getDLTNetworkDiagram(host:String, port:Int):JSON
  getDLTNetworkData(path: String, currency:String): JSON
  getDLTAccountCash(path: String, currency: String): JSON

  #TODO: Annotate 
  getDltCordaCash(payload:JSON): JSON
  

  # Mongo 
  getMongoData(db:String, collection:String, query:JSON):JSON
  getMongoDataByID(db:String, collection:String, id:String, field:String):JSON  
  getMongoObjectsByID(db:String, collection:String, id:String, field:String):JSON
  getMongoObjects(db:String, collection:String, query:JSON):JSON

  


  

  # Portfolio

  """
  Retrieves portfolio item data
  """  
  getPortfolioItem(path:String, payload:JSON):JSON

  """
  Retrieves members portfolio account
  """  
  getPortfolioAssetsAccount(db:String, collection:String, id:String, field:String):JSON  

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