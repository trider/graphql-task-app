const tasks = require('../tasks/tasks')
const users = require('../users/users') 





const utilsInstate = {

  inStateRead(parent, args, dataSources, context) {

    if (args.role === 'member') {
      return member.Query[args.command](parent, args, { dataSources }, context)
    }
    else if (args.role === 'operator') {
      return operator.Query[args.command](parent, args, { dataSources }, context)
    }


  },
  inStateRun(parent, args, dataSources, context) {

    if (args.role === 'member') {
      // console.log('memberContext', context.user)
      return member.Mutation[args.command](parent, args, { dataSources }, context)
    }
    else if (args.role === 'operator') {
      return operator.Mutation[args.command](parent, args, { dataSources }, context)
    }


  },

  inStateReadToken(parent, args, dataSources, context) {

    if (args.role === 'member') {
      return utilsInstate.inStateReadMember(parent, args, dataSources, context)
    }
    else if (args.role === 'operator') {
      return utilsInstate.inStateReadOperator(parent, args, dataSources, context)
    }


  },
  inStateRunToken(parent, args, dataSources, context) {

    if (args.role === 'member') {
      return utilsInstate.inStateRunMember(parent, args, dataSources, context)
    }
    else if (args.role === 'operator') {
      return utilsInstate.inStateRunOperator(parent, args, dataSources, context)
    }


  },





  inStateReadMember(parent, args, dataSources, context) {

    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData({
        db: 'graphDB',
        collection: 'membersList',
        query: {
          token: args.key

        }
      }).then((data, err) => resolve(data))
    }).then((data) => {
      // const decoded = jwt.verify(args.key, `${args.payload.email}_${args.payload.password}`);

      console.log('key', args.key)
      console.log('token', data.token)
      if (data !== null) {

        return member.Query[args.command](parent, args, { dataSources }, context)
      }
      else {
        return {
          ...args.payload,
          status: 'Invalid Token'
        }
      }


    })


    return getData.then(data => {
      return data

    }).catch((err) => {
      console.log(':Failed')
      return {
        msg: 'inStateReadMember:Failed',
        err: err.toString()
      }
    })





  },

  inStateReadOperator(parent, args, dataSources, context) {

    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData({
        db: 'graphDB',
        collection: 'operatorData',
        query: {
          token: args.key

        }
      }).then((data, err) => resolve(data))
    }).then((data) => {
     console.log('key', args.key)
     console.log('token', data.token)

     if(data !== null){
      return operator.Query[args.command](parent, args, { dataSources }, context)
      }
      else{
        return {
          ...args.payload,
          status:'Invalid Token'
        }
      }


    })


    return getData.then(data => {
      return data

    }).catch((err) => {
      console.log(':Failed')
      return {
        msg: 'inStateReadMember:Failed',
        err: err.toString()
      }
    })





  },

  inStateRunMember(parent, args, dataSources, context) {

    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData({
        db: 'graphDB',
        collection: 'membersList',
        query: {
          token: args.key

        }
      }).then((data, err) => resolve(data))
    }).then((data) => {
      console.log('key', args.key)
      console.log('token', data.token)
      if(data !== null){

        return member.Mutation[args.command](parent, args, { dataSources }, context)
      }
      else{
        return {
          ...args.payload,
          status:'Invalid Token'
        }
      }


    })


    return getData.then(data => {
      return data

    }).catch((err) => {
      console.log(':Failed')
      return {
        msg: 'inStateReadMember:Failed',
        err: err.toString()
      }
    })





  },

  inStateRunOperator(parent, args, dataSources, context) {

    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData({
        db: 'graphDB',
        collection: 'operatorData',
        query: {
          token: args.key

        }
      }).then((data, err) => resolve(data))
    }).then((data) => {
      console.log('key', args.key)
      console.log('token', data.token)
      if(data !== null){
        return operator.Mutation[args.command](parent, args, { dataSources }, context)
      }
      else{
        return {
          ...args.payload,
          status:'Invalid Token'
        }
      }


    })


    return getData.then(data => {
      return data

    }).catch((err) => {
      console.log(':Failed')
      return {
        msg: 'inStateReadMember:Failed',
        err: err.toString()
      }
    })





  },



  MemberDomainGet(parent, args, dataSources, context) {

    if (args.domain === 'member') {
      return utilsMember[args.command](parent, args, dataSources, context)
    }

  },




};

module.exports = utilsInstate;