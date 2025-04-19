// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { ContentfulContentSource } from '@stackbit/cms-contentful';

export default defineStackbitConfig({
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ENVIRONMENT!,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
      environment: process.env.CONTENTFUL_MANAGEMENR_TOKEN!,
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
        },
        {
          name: 'Blog',
          type: 'page',
          urlPath: '/news/{slug}',
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
