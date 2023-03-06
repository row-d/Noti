import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { EditorOptions } from "@tiptap/react";

const CustomDocument = Document.extend({
  content: "heading block*",
});
export const tiptapConfig: Partial<EditorOptions> = {
  extensions: [
    CustomDocument,
    StarterKit.configure({
      document: false,
    }),
    Highlight,
    Typography,
    Image,
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return "Untitled";
        }
        return "Write something...";
      },
    }),
  ],
  injectCSS: false,
};
