import type { CollectionConfig } from 'payload';
import { QuizBlock } from './Blocks/QuizBlock';
import { VideoBlock } from './Blocks/VideoBlock';

export const Courses: CollectionConfig = {
  slug: "courses",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "curriculum",
      label: "Curriculum",
      type: "blocks",
      required: true,
      blocks: [
        QuizBlock,
        VideoBlock
      ]
    }
  ]
}