import { type SchemaTypeDefinition } from 'sanity'


import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/video'
import video from './schemas/video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, video],
}
