import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'youtube_ID',
      title: 'Youtube_ID',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'id',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'category',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'date',
      type: 'date',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      post: 'post.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {post} = selection
      return {...selection, subtitle: post && `by ${post}`}
    },
  },
})
