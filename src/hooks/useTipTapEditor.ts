import { useEffect } from "react";
import { EditorOptions, JSONContent, useEditor } from "@tiptap/react";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

interface TipTapEditorProps {
  updateTime?: number;
  tiptapConfig: Partial<EditorOptions>;
}

export const editorStorageAtom = atomWithStorage<
  JSONContent | null | undefined
>("editor", null);

export function useTipTapEditor({
  tiptapConfig,
  updateTime = 1000 * 60 * 2,
}: TipTapEditorProps) {
  const editor = useEditor(tiptapConfig);

  const [editorStorage, setEditorStorage] = useAtom(editorStorageAtom);

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
