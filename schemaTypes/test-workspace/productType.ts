import { defineType, defineField, defineArrayMember } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Prodcuts',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Product ID (Slug-like key)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Product Display Name (Internal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
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
      name: 'href',
      title: 'Product Href Path',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Product Badge/Label (e.g. Bestseller)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'compareAtPrice',
      title: 'Compare At Original Price',
      type: 'number',
    }),
    defineField({
      name: 'sku',
      title: 'SKU Identifier',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Long Description Text',
      type: 'text',
    }),
    defineField({
      name: 'stock',
      title: 'Current Inventory Level',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Product Main Image URL',
      type: 'url',
    }),
    defineField({
      name: 'images',
      title: 'Product Gallery Images',
      type: 'array',
      of: [defineArrayMember({ type: 'url' })],
    }),
    defineField({
      name: 'imageCart',
      title: 'Cart Thumbnail Image URL',
      type: 'url',
    }),
    defineField({
      name: 'bgColor',
      title: 'UI Background Color Class (Tailwind)',
      type: 'string',
    }),
    defineField({
      name: 'serves',
      title: 'Serves Capacity Count',
      type: 'string',
    }),
    defineField({
      name: 'activeTime',
      title: 'Active Kitchen Preparation Time',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Product Key Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            defineField({ name: 'icon', title: 'Lucide Icon Key', type: 'string' }),
            defineField({ name: 'text', title: 'Feature Text', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'allergenNote',
      title: 'Allergen Information Disclaimer',
      type: 'string',
    }),
    defineField({
      name: 'signatureLine',
      title: 'Bespoke Quote / Signature Phrase',
      type: 'text',
    }),
    defineField({
      name: 'instructions',
      title: 'Step-by-step Cooking Instructions',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'checkoutLink',
      title: 'Direct Stripe Checkout Link',
      type: 'url',
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
    }),
    defineField({
      name: 'stripePriceIdProd',
      title: 'Stripe Price ID (Production)',
      type: 'string',
    }),
    defineField({
      name: 'stripePriceIdTest',
      title: 'Stripe Price ID (Sandbox/Test)',
      type: 'string',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients Composition List',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})