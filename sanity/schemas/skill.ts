import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Skill Title",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      description: "Progress in that skill from 0 to 100%",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
  ],
})
