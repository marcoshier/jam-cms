import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      defaultValue: 'A work by Jeroen Meijer'
    },
    {
      name: 'year',
      type: 'number',
      required: false,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'collaborators',
      type: 'text',
      required: false,
    },
    {
      name: 'hardware',
      type: 'text',
      required: false,
    },
    {
      name: 'sotware',
      type: 'text',
      required: false,
    },
    {
      name: 'otherImages',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    }
  ],
}