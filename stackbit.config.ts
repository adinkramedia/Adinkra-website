
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content/news"],
      models: [
        {
          name: "AfricanNews",           // Must match `modelName` in .md
          type: "page",                  // Required for sitemap
          filePath: "content/news/{slug}.md", // Path format
          urlPath: "/news/{slug}",       // Preview URL format
          fields: [
            { name: "title", type: "string", required: true },
            { name: "summary", type: "text" },
            { name: "image", type: "image" },
            { name: "body", type: "markdown" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents }) =>
    documents
      .filter(doc => doc.modelName === "AfricanNews") // Make sure it matches
      .map((doc) => ({
        stableId: doc.id,
        urlPath: `/news/${doc.slug}`,
        document: doc,
        isHomePage: false,
      })) as SiteMapEntry[]
});
