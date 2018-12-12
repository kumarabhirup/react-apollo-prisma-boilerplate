const Mutations = {

    async createUser(parent, args, context, info){
        const user = await context.db.mutation.createUser({
            data: { ...args }
        }, info)
        console.log(user)
        return user
    }

};

module.exports = Mutations;
