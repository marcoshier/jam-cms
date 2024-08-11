import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: process.env.PAYLOAD_ENV !== 'development',
      sameSite: process.env.PAYLOAD_ENV === 'testing' ? 'none' : 'lax',
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
      unique: true
      }
  ],
}

export default Users
