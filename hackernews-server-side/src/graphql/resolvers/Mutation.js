import Link from '../../models/Link'
import User from '../../models/User'
import jwt from 'jsonwebtoken'

const verify = ( token, secret ) => {
  if( !token ) throw new Error('No token has been provider')
  
  token = token.replace(/Bearer\s/ , '')
  console.log(token)
  const encoded = jwt.verify(token, secret)
  return encoded
}

export const Mutation = {
  createLink : async ( _ , { data }, { authorization } ) => {
    try{
      console.log("Authorizatijon:" , authorization)
      verify(authorization, process.env.JWT_SECRET)
      const  link = new Link({ ...data })
      await link.save()
      
      return { status: 200, success: true, message: "Successfull creation of link", link }

    } catch( e ){
      return { status: 400, success: false, message: e.message, link: null}
    }

  },
  createUser: async( _, { data }, __ ) => {
    try {
      const user = new User({ ...data })
      await user.save()

      // generates s webtoken
      const token = jwt.sign({ id: user.id } , process.env.JWT_SECRET, {expiresIn: '1h'} )

      return { status:200, success:true, message: 'Successful creation', token, user }
    } catch( e ){
      return { status: 400, success: false, message: e.message, token: null, user: null }
    }
  },
  loginUser: async ( _, { data }, __ ) => {
    try{
      const user = await User.findOne({ ...data } )
      if(!user) throw new Error('User could not be found')

      const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: '1hr'})

      return { status: 200, success: true, message: 'Successful login', token: token, user: user }
    }catch(e){
      console.log(e)
      return { status: 400, success: false, message: e.message, token: null , user: null }
    }

  },

}