import { defineType, defineField, defineArrayMember } from 'sanity'

export const spiceJournalType = defineType({
  name: 'Journal',
  title: 'My Journal',
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
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'HEALTH',
    }),
    defineField({
      name: 'articleBadge',
      title: 'Article Type / Promotion',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Featured', value: 'featured' },
          { title: 'Popular', value: 'popular' },
          { title: 'Editor\'s Choice', value: 'editors_choice' },
        ],
        layout: 'dropdown', // Enforces a clean dropdown menu UI
      },
      initialValue: 'none', // Sets 'None' as the default choice
    }),
    
    defineField({
      name: 'href',
      title: 'Page Href Path  -- (/journal/[Slug -Name] -- Eg: /journal/power-of-indian-spices)',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image URL',
      type: 'url',
      description: 'Main banner image for the article',
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
      name: 'readMore',
      title: 'Read More CTA Text',
      type: 'string',
      initialValue: 'Read More',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Hook',
      type: 'text',
      description: 'Opening hook paragraph skip site headers, footers and secondary navigations',
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Dynamic Page Builder Blocks',
      type: 'array',
      description: 'Add, edit, remove, and reorder content sections dynamically while authoring.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'textBlock',
          title: 'Rich Text Section',
          fields: [
            defineField({ name: 'body', title: 'Content Body (Markdown/Text)', type: 'text', validation: (Rule) => Rule.required() }),
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'tipCard',
          title: 'Tip / Callout Card',
          fields: [
            defineField({ name: 'title', title: 'Callout Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'content', title: 'Main Body Text', type: 'text', validation: (Rule) => Rule.required() }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
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