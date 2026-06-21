import { defineType, defineField, defineArrayMember } from 'sanity'

export const homePageContentType = defineType({
  name: 'homePageContent',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title/Identifier',
      type: 'string',
      initialValue: 'Home Page Default Settings',
      description: 'Use a clear name like "Home Page Default Settings" to identify this configuration.',
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
        defineField({ name: 'cta', title: 'Call to Action Button Label', type: 'string' }),
      ],
    }),

    // --- STORY SECTION ---
    defineField({
      name: 'story',
      title: 'Story Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'string' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
        defineField({ name: 'description', title: 'Story Copy/Description', type: 'text' }),
        defineField({ name: 'cta', title: 'Story CTA Button Label', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'Story CTA Link/Href Path', type: 'string' }),
      ],
    }),

    // --- PRODUCTS METADATA ---
    defineField({
      name: 'productsMetadata',
      title: 'Products Section Metadata',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Products Section Subtitle', type: 'string' }),
        defineField({ name: 'heading', title: 'Products Section Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Products Section Description', type: 'text' }),
      ],
    }),

    // --- BRAND PILLARS ---
    defineField({
      name: 'pillars',
      title: 'Brand Pillars Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Pillars Section Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Pillars Section Subheading', type: 'string' }),
        defineField({
          name: 'list',
          title: 'Core Pillars List',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'pillarItem',
              title: 'Pillar Item',
              fields: [
                defineField({ name: 'title', title: 'Pillar Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Pillar Explanation/Description', type: 'text' }),
                defineField({ name: 'icon', title: 'Lucide Icon Name (e.g. ShieldCheck, Leaf)', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- JOURNAL (BLOG) SECTION ---
    defineField({
      name: 'journal',
      title: 'Journal Section Settings',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Journal Section Subtitle', type: 'string' }),
        defineField({ name: 'heading', title: 'Journal Section Heading', type: 'string' }),
        defineField({ name: 'viewAllCTA', title: 'View All CTA Button Label', type: 'string' }),
        defineField({
          name: 'articles',
          title: 'Featured Articles',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'featuredArticle',
              title: 'Featured Article Item',
              fields: [
                defineField({ name: 'badge', title: 'Article Category Badge', type: 'string' }),
                defineField({ name: 'title', title: 'Article Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Short Snippet/Description', type: 'text' }),
                defineField({ name: 'cta', title: 'CTA Button Label', type: 'string', initialValue: 'Read More' }),
                defineField({ name: 'image', title: 'Image Asset Path/URL', type: 'string' }),
                defineField({ name: 'bgColor', title: 'Card Background Color Class (Tailwind, e.g. bg-[#E9D8C1])', type: 'string' }),
                defineField({ name: 'href', title: 'Article HREF Path (e.g. /journal/...)', type: 'string' }),
              ],
            }),
          ],
        }),
      ],
    }),

    // --- CONTACT SECTION ---
    defineField({
      name: 'contact',
      title: 'Contact/Get In Touch Section',
      type: 'object',
      fields: [
        defineField({ name: 'subtitle', title: 'Contact Section Subtitle', type: 'string' }),
        defineField({ name: 'heading', title: 'Contact Section Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Contact Section Description Text', type: 'text' }),
        defineField({
          name: 'buttons',
          title: 'Contact Action Buttons',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'contactButton',
              title: 'Action Button',
              fields: [
                defineField({ name: 'label', title: 'Button Label', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'primary', title: 'Is Primary Styling/Accent Button?', type: 'boolean', initialValue: true }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
