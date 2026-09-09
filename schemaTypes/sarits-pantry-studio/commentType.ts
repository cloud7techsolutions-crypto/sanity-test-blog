import { defineField, defineType } from 'sanity'

export const commentSchema = defineType({
  name: 'comment',
  title: 'Feedback',
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
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Customer rating from 1 to 5.',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
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
        filter: '_type in ["product", "aboutPageContent", "homePageContent", "Journal"]',
      }
    }),
    defineField({
      name: 'source',
      type: 'string',
      title: 'Feedback Source',
      description: 'Where did the user hear about us?',
      initialValue: 'website',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'website review', value: 'website' },
          { title: 'Others', value: 'others' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
    },
  },
})