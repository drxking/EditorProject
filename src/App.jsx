import "./styles.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group  flex items-center justify-center">
      <div className="button-group  flex gap-x-6 gap-y-4 flex-wrap py-3 px-4 border rounded-xl items-center justify-center border-gray-900 bg-gray-900/35 text-sm">
        <div className="border flex py-2 border-gray-800 rounded-lg px-1  bg-gray-900">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className="border border-r-gray-700 border-t-transparent border-b-transparent border-l-transparent px-4 font-bold"
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className="border border-r-gray-700 border-t-transparent border-b-transparent border-l-transparent px-5 italic "
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className=" px-4 "
          >
            <del> Del </del>
          </button>
        </div>

        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="border-r-gray-800 h-6 border border-transparent pr-3"
        >
          Clear marks
        </button>
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="border-r-gray-800 h-6 border border-transparent pr-3"
        >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </button>
        <div className="border border-gray-800 flex px-2 py-2 bg-gray-900 rounded-lg">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            H3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            H4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            H5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className=" px-2 border-r-gray-800"
          >
            H6
          </button>
        </div>
        <div className="border border-gray-800 px-2 py-1 bg-gray-900 flex items-center justify-center rounded-lg">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className="border border-l-transparent border-t-transparent border-b-transparent px-2 border-r-gray-800"
          >
            <i class="ri-list-check text-xl"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className=" px-2 border-r-gray-800"
          >
            <i class="ri-list-ordered-2 text-xl"></i>
          </button>
        </div>
        <div className="border flex items-center justify-center px-4 gap-5 border-r-gray-900 border-l-transparent border-y-transparent">
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className=""
          >
            Code
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            Code block
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            Blockquote
          </button>
        </div>

        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <div className="border gap-2 flex p-2 border-gray-800 rounded-lg bg-gray-900">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="border border-l-transparent border-t-transparent border-b-transparent pr-2 border-r-gray-800 flex gap-2 items-center justify-center"
          >
            <i class="ri-arrow-go-back-line"></i>
            Undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="flex gap-2 justify-center items-center"
          >
            Redo
            <i class="ri-arrow-go-forward-line"></i>
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center border border-gray-800 bg-gray-900 py-[6px] px-2 rounded-lg">
          <p>Color:</p>
        <input
          type="color"
          onInput={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes("textStyle").color}
          data-testid="setColor"
          className="bg-transparent"
        />
        </div>
        
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
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

const content = `
<h1>
<b>
  Hi there,
  </b>
</h1>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export default () => {
  return (
    <div className="py-7 px-44  text-[#e5e5e5] min-h-[100vh] flex flex-col gap-5">
      <nav className=" pb-4 flex justify-between">
        <h1 className="text-xl font-medium">Shidvin</h1>
        <a href="#" className="flex items-center justify-center gap-2">Check my Github<i class="ri-github-fill text-3xl"></i></a>
      </nav>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </div>
  );
};
