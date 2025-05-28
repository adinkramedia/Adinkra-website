import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          label: "Pages",
          filePath: "content/pages/{slug}.md",
          urlPath: "/{slug}",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "body", type: "markdown" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents }) => {
    return documents
      .filter((doc) => doc.modelName === "Page")
      .map((doc) => ({
        stableId: doc.id,
        urlPath: `/${doc.slug}`,
        document: doc,
        isHomePage: doc.slug === "index"
      })) as SiteMapEntry[];
  }
});
