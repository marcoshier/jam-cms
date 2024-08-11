import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

const WHITELIST_ORIGINS= "http://localhost:3000,https://192.168.1.158:3000"

import Users from './collections/Users'
import Works from './collections/Works'
import Media from './collections/Media'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors: WHITELIST_ORIGINS.split(','),
  csrf: WHITELIST_ORIGINS.split(','),

  collections: [
    Users, 
    Works,
    Media,
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
