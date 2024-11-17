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
      required: false
    },
    {
      name: 'year',
      type: 'text',
      required: true
    },
    {
      name: 'type',
      type: 'text',
      required: false
    },
    {
      name: 'backgroundVideo',
      type: 'text',
      admin: {
        description: () => `Vimeo Link (will be used as background)`,
      },
      required: false,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: () => `Background image (used as fallback if video is not available)`,
      },
      required: true,
    },
    {
      name: 'downloadLabel',
      type: 'text',
      required: false,
    },
    {
      name: 'downloadLink',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'hardware',
      type: 'text',
      required: false
    },
    {
      name: 'software',
      type: 'text',
      required: false
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
    {
      name: 'otherVideos',
      type: 'text',
      admin: {
        description: () => `Please provide all videos as Vimeo link`,
      },
      required: false,
    },
  ],
}

export default Posts
