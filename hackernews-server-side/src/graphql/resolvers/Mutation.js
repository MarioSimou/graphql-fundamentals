import Link from '../../models/Link'
import User from '../../models/User'
import jwt from 'jsonwebtoken'

export const Mutation = {
  createLink : async ( _ , { data }, __ ) => {
    const  link = new Link({ ...data })
    return await link.save()
  },
  createUser: async( _, { data }, __ ) => {
    try {
      const user = new User({ ...data })
      await user.save()

      // generates s webtoken
      const token = jwt.sign({ id: user.id } , process.env.JWT_SECRET )

      return { status:200, success:true, message: 'Successful creation', token, user }
    } catch( e ){
      return { status: 400, success: false, message: e.message, token: null, user: null }
    }
  },
  loginUser: async ( _, { data }, __ ) => {
    try{
      const user = await User.findOne({ ...data } )
      if(!user) throw new Error('User could not be found')

      const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET )

      return { status: 200, success: true, message: 'Successful login', token: token, user: user }
    }catch(e){
      return { status: 400, success: false, message: e.message, token: null , user: null }
    }

  },

}