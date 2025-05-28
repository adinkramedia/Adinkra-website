import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "newsPost",
          label: "News Post",
          type: "page",
          filePathPattern: "news/{slug}.md",
          fields: [
            { name: "title", label: "Title", type: "string", required: true },
            { name: "summary", label: "Summary", type: "text" },
            { name: "image", label: "Image", type: "image" }
          ]
        }
      ],
    }),
  ],

    return entries.map((entry) => ({
      // Each news post will be linked to /news.html#{slug}
      urlPath: `/news.html#${entry.slug}`,
      modelName: "newsPost",
      entryId: entry.id,
    }));
  }
});
