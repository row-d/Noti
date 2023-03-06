import { EditorContent } from "@tiptap/react";
import { tiptapConfig } from "./config/tiptapconfig";
import { useTipTapEditor } from "./hooks/useTipTapEditor";

export default function App() {
  const editor = useTipTapEditor({ tiptapConfig });
  if (!editor) return null;

  return (
    <div className="App">
      <EditorContent
        editor={editor}
        autoFocus={true}
        spellCheck={false}
      />
    </div>
  );
}
