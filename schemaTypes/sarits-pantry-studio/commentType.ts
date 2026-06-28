import { defineField, defineType } from 'sanity'

export const commentSchema = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'User Name',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email Address',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'comment',
      type: 'text',
      title: 'Comment Text',
      validation: (Rule) => Rule.required().min(3).max(1000),
    }),
    defineField({
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      description: 'Items must be approved manually to display on the frontend.',
      initialValue: false,
    }),
    defineField({
      name: 'targetPage',
      title: 'Target Page',
      type: 'reference',
      to: [
        { type: 'product' },
        { type: 'aboutPageContent' },
        { type: 'homePageContent' },
        { type: 'Journal' }
      ],
      options: {
        // We update the filter to check for any of these allowed types
        filter: '_type in ["product", "aboutPageContent", "homePageContent", "Journal"]',
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
    },
  },
})