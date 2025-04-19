// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types"; // Ensure you're importing defineStackbitConfig
import { ContentfulContentSource } from '@stackbit/cms-contentful';

export default defineStackbitConfig({
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,  // Correct usage of environment variables
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,  // Corrected from CONTENTFUL_ENVIRONMENT
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
      environment: process.env.CONTENTFUL_ENVIRONMENT!,  // Corrected 'MANAGEMENR' to 'ENVIRONMENT'
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',  // Slug pattern for pages
        },
        {
          name: 'Blog',
          type: 'page',
          urlPath: '/news/{slug}',  // Slug pattern for blog posts
        },
      ],
    }),
  ],
  siteMap: ({ documents }) => {
    return documents.map((doc) => ({
      stableId: doc.id,
      urlPath: `/${doc.slug}`,
      document: doc,
      isHomePage: doc.slug === 'index', // Adjust for your homepage slug
    }));
  },
});
