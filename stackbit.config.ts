import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: '^0.6.0',
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
          urlPath: "/news.html#{slug}",
          fields: [
            { name: "title", label: "Title", type: "string", required: true },
            { name: "summary", label: "Summary", type: "text" },
            { name: "image", label: "Image", type: "image" }
          ]
        }
      ],
    }),
  ]
});
