import { EditorContent, PureEditorContent } from "@tiptap/react";
import { useEffect } from "react";
import { useTipTapEditor } from "./hooks/useTipTapEditor";

export default function App() {
  const editor = useTipTapEditor();
  if (!editor) return null;

  return (
    <div className="container mx-auto my-4 rounded h-full p-4 shadow-2xl bg-gray-600">
      <EditorContent editor={editor} autoFocus={true} spellCheck={false} />
    </div>
  );
}
