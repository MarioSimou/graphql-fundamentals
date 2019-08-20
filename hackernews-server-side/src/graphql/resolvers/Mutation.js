import Link from '../../models/Link'

export const Mutation = {
  createLink : async ( parent , { data }, context, info ) => {
    const  link = new Link({ ...data })
    return await link.save()
  }
}