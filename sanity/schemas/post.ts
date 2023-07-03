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
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'download',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'link',
              type: 'url'
            },
            {
              name: 'name',
              type: 'string'
            },
            {
              name: 'type',
              type: 'string',
              options: {
                list: [
                  { title: 'XLS', value: 'xls' },
                  { title: 'DOC', value: 'doc' },
                  { title: 'PPT', value: 'ppt' },
                  { title: 'ZIP', value: 'zip' }
                ]
              }
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'numerVideo',
      title: 'Numero do video (is the number of the video)',
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
      options: {
        list: [
          { title: 'Agências', value: 'Agências' },
          { title: 'ChatBot', value: 'ChatBot' },
          { title: 'Marketing Digital', value: 'Marketing Digital' },
          { title: 'Geração de Leads', value: 'Geração de Leads' },
          { title: 'Mídia Paga', value: 'Mídia Paga' },
        ]
      }
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
