import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  auth: false,
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: () => `Background image (used as fallback if video is not available)`,
      },
      required: false,
    },
    {
      name: 'bodyText',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'array',
      label: "Images (PNG, JPG, WEBP, GIF)",
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: 'work-image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ]
    },
  ],
}

export default Posts
