import { defineType, defineField, defineArrayMember } from 'sanity'

export const spiceJournalType = defineType({
  name: 'spiceJournal',
  title: 'Spice Journal Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'The Power of Indian Spices: A Culinary and Healing Guide',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Sarita Roy',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
    }),
    defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'introduction',
      title: 'Introduction Hook',
      type: 'text',
      description: 'Opening hook paragraph skip site headers, footers and secondary navigations',
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
})
