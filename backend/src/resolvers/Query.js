const { forwardTo } = require('prisma-binding')

const Query = {

    users: forwardTo('db'),
    async users(parent, args, context, info) {
        console.log('Getting users!')
        const users = await context.db.query.users()
        console.log(users)
        return users
    }
    
};

module.exports = Query;
