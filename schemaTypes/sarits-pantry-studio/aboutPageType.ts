import { defineType, defineField, defineArrayMember } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPageContent',
  title: 'About Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title/Identifier',
      type: 'string',
      initialValue: 'About Page Default Settings',
      description: 'Use a clear name like "About Page Default Settings" to identify this configuration.',
      validation: (Rule) => Rule.required(),
    }),

    // --- HERO SECTION ---
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge/Tagline', type: 'string' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
        defineField({ name: 'description', title: 'Hero Description Text', type: 'text' }),
        defineField({ name: 'image', title: 'Hero Image Path/URL', type: 'string' }),
      ],
    }),

    // --- STORY SECTION ---
    defineField({
      name: 'story',
      title: 'Story Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string' }),
        defineField({
          name: 'paragraphs',
          title: 'Story Paragraphs',
          type: 'array',
          of: [defineArrayMember({ type: 'text' })],
        }),
        defineField({ name: 'quote1', title: 'Key Quote 1', type: 'string' }),
        defineField({ name: 'quote2', title: 'Key Quote 2', type: 'string' }),
        defineField({ name: 'allergenNote', title: 'Allergen Disclaimer Note', type: 'text' }),
        defineField({ name: 'signature', title: 'Founder signature / Sign-off Name', type: 'string' }),
      ],
    }),

    // --- CORE VALUES SECTION ---
    defineField({
      name: 'values',
      title: 'Core Values Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Values Section Subtitle', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Values List Items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'valueItem',
              title: 'Value Item',
              fields: [
                defineField({ name: 'title', title: 'Value Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Value Explanation Description', type: 'text' }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
