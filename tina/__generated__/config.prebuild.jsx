// src/data/categories.ts
var CATEGORIES = [
  "Hukum",
  "Pemerintahan",
  "Politik",
  "Pariwisata",
  "Ekonomi",
  "Budaya",
  "Olahraga",
  "Kriminal"
];

// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch: "master",
  clientId: "4dcc82f5-6a9e-4a7c-976a-5c553c4bafea",
  // Get this from tina.io
  token: "765f170408e3d2e3d8301dee07049fd6dfb31b59",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "/src/assets/images",
      publicFolder: ""
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Post",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "image",
            label: "Cover Image",
            required: true,
            name: "heroImage",
            description: "The image used for the cover of the post"
          },
          {
            type: "string",
            required: true,
            name: "category",
            label: "Category",
            description: "Select an category for this post",
            options: [...CATEGORIES]
          },
          {
            type: "string",
            label: "description",
            required: true,
            name: "description",
            description: "A short description of the post"
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean",
            description: "If this is checked the post will not be published"
          },
          {
            type: "string",
            name: "tags",
            required: true,
            label: "Tags",
            description: "Tags for this post",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            label: "Body",
            name: "SButton",
            isBody: true,
            templates: [
              // Custom Components
              {
                label: "SButton",
                name: "SButton",
                fields: [
                  {
                    type: "rich-text",
                    label: "SButton",
                    name: "children",
                    isBody: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
