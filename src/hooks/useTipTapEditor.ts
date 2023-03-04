import ActionBar from "../components/ActionBar";
import StarterKit from "@tiptap/starter-kit";
import { Editor, useEditor } from "@tiptap/react";
import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface TipTapEditorProps {
  updateTime?: number;
}

export function useTipTapEditor({
  updateTime = 1000 * 60 * 2,
}: TipTapEditorProps = {}) {
  const CustomDocument = Document.extend({
    content: "heading block*",
  });
  // TODO: Fix placeholder
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
    ],
    injectCSS: false,
  });

  const [editorStorage, setEditorStorage] = useLocalStorage(
    "editor",
    editor?.getJSON()
  );

  useEffect(() => {
    setInterval(() => setEditorStorage(editor?.getJSON()), updateTime);

    if (editor && editorStorage) {
      editor.commands.setContent(editorStorage);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s" && editor !== null) {
        e.preventDefault();
        setEditorStorage(editor.getJSON());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [editor]);

  return editor;
}
