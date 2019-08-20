import Link from '../../models/Link'

export const Query = {
  links: async ( parent , { data }, content, info ) => {
    console.log(data)
    return await Link.find({ ...data })     
  }
}