import { defineType, defineField, defineArrayMember } from 'sanity'

export const globalContentType = defineType({
  name: 'globalContent',
  title: 'Global Content (Header & Footer)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title/Identifier',
      type: 'string',
      initialValue: 'Global Settings',
      description: 'Use "Global Settings" to identify this configuration.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'navLinks',
          title: 'Navigation Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'navLink',
              title: 'Navigation Link',
              fields: [
                defineField({ name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'href', title: 'HREF Path', type: 'string', validation: (Rule) => Rule.required() }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'cta',
          title: 'Call to Action Label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Footer Description Copy',
          type: 'text',
        }),
        defineField({
          name: 'quickLinksHeading',
          title: 'Quick Links Heading',
          type: 'string',
          initialValue: 'Quick Links',
        }),
        defineField({
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'footerLink',
              title: 'Footer Link',
              fields: [
                defineField({ name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'href', title: 'HREF Path', type: 'string', validation: (Rule) => Rule.required() }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'newsletterHeading',
          title: 'Newsletter Heading',
          type: 'string',
          initialValue: 'Newsletter',
        }),
        defineField({
          name: 'newsletterText',
          title: 'Newsletter Description Text',
          type: 'string',
        }),
        defineField({
          name: 'newsletterPlaceholder',
          title: 'Newsletter Email Input Placeholder',
          type: 'string',
          initialValue: 'Your email address',
        }),
        defineField({
          name: 'newsletterButton',
          title: 'Newsletter Submit Button Label',
          type: 'string',
          initialValue: 'Subscribe',
        }),
        defineField({
          name: 'qrCodesHeading',
          title: 'QR Codes Section Heading',
          type: 'string',
          initialValue: 'Connect with Us',
        }),
        defineField({
          name: 'qrCodes',
          title: 'Social / QR Code Connections',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'qrCode',
              title: 'Social QR Code Connection',
              fields: [
                defineField({ name: 'label', title: 'Social Platform / Label', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'src', title: 'Resource URL or Image Path (e.g. /assets/...)', type: 'string', validation: (Rule) => Rule.required() }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'copyright',
          title: 'Copyright Notice Text',
          type: 'string',
        }),
        defineField({
          name: 'legalLinks',
          title: 'Legal Standard Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'legalLink',
              title: 'Legal Link',
              fields: [
                defineField({ name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'href', title: 'HREF Path', type: 'string', validation: (Rule) => Rule.required() }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
