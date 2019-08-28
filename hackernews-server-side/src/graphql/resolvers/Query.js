import Link from '../../models/Link'

export const Query = {
  links: async ( parent , { data }, content, info ) => {
    try {
      const links = await Link.find({ ...data })
      return { status: 200, success: true, message: "Successfull creation of link", links: links }
    } catch(e) {
      return { status: 400, success: false, message: e.message, links: []}
    }
  }
}