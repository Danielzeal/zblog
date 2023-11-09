/* eslint-disable react/no-children-prop */

"use client";
// import { Color } from '@tiptap/extension-color'
// import ListItem from '@tiptap/extension-list-item'
// import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import {
  FaBold,
  FaCode,
  FaHeading,
  FaItalic,
  FaListOl,
  FaQuoteLeft,
} from "react-icons/fa";

const MenuBar = ({
  setDesc,
}: {
  setDesc: Dispatch<SetStateAction<string>>;
}) => {
  const { editor } = useCurrentEditor();
  const description = editor?.getHTML();

  useEffect(() => {
    if (description) {
      setDesc(description);
    }
  }, [description, editor, setDesc]);

  if (!editor) {
    return null;
  }

  return (
    <div className='flex gap-6 border-2 rounded-md px-4 py-2 overflow-hidden flex-wrap'>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? "bg-white text-black p-1 rounded-sm" : ""
        }
      >
        <FaBold />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? "bg-white text-black p-1 rounded-sm" : ""
        }
      >
        <FaItalic />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaHeading size={16} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaHeading size={14} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaHeading size={12} />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaListOl />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaCode />
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-white text-black p-1 rounded-sm"
            : ""
        }
      >
        <FaQuoteLeft />
      </button>
    </div>
  );
};

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = ``;

const TipTap = ({ setDesc }: { setDesc: Dispatch<SetStateAction<string>> }) => {
  return (
    <EditorProvider
      slotBefore={<MenuBar setDesc={setDesc} />}
      extensions={extensions}
      content={content}
      children={undefined}
    ></EditorProvider>
  );
};

export default TipTap;
