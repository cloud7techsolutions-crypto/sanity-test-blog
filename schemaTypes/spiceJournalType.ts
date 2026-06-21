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
    // defineField({
    //   name: 'heroImage',
    //   title: 'Hero Image URL',
    //   type: 'url',
    //   description: 'Main banner image for the article',
    // }),
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
    }),
    // defineField({
    //   name: 'contentBlocks',
    //   title: 'Dynamic Page Builder Blocks',
    //   type: 'array',
    //   description: 'Add, edit, remove, and reorder content sections dynamically while authoring.',
    //   of: [
    //     // 1. TEXT BLOCK
    //     defineArrayMember({
    //       type: 'object',
    //       name: 'textBlock',
    //       title: 'Rich Text Section',
    //       fields: [
    //         defineField({ name: 'body', title: 'Content Body (Markdown/Text)', type: 'text', validation: (Rule) => Rule.required() }),
    //       ],
    //     }),
        
    //     // 2. TIP / CALLOUT CARD
    //     defineArrayMember({
    //       type: 'object',
    //       name: 'tipCard',
    //       title: 'Ayurvedic Tip / Callout Card',
    //       fields: [
    //         defineField({ name: 'title', title: 'Callout Title', type: 'string', validation: (Rule) => Rule.required() }),
    //         defineField({ name: 'accentText', title: 'Category Accent Tag (e.g. TECHNIQUE)', type: 'string' }),
    //         defineField({ name: 'content', title: 'Main Body Text', type: 'text', validation: (Rule) => Rule.required() }),
    //       ],
    //     }),
    //   ],
    // }),
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
