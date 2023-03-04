import { PhotoIcon as ImageIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import { MouseEvent, SyntheticEvent, useEffect, useState } from "react";

export interface ActionBarProps {
  editor: Editor | null;
}

export default function ActionBar({ editor }: ActionBarProps) {
  useEffect(() => {}, []);
  if (!editor) return null;
  return (
    <div className="fixed mx-auto bottom-0 py-4 px-6 mt-2 w-screen flex justify-center flex-wrap gap-6 text-eunry-400">
      <div className="flex gap-2 flex-wrap">
        <button>h1</button>
        <button>h2</button>
        <button>h3</button>
        <button>h4</button>
        <button>h5</button>
        <button>h6</button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={editor.isActive("bold")}
          className="font-bold"
        >
          B
        </button>
        <button className="italic">i</button>
        <button className="underline">U</button>
        <button className="line-through">S</button>
        <button>
          <CodeBracketIcon className="w-4 h-4" />
        </button>
      </div>
      <button>
        <ImageIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
