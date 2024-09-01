// src/Tiptap.js
import React from 'react';
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// Define your extension array
const extensions = [StarterKit];

const content = '<p>Hello World!</p>';

const Tiptap = () => {
  return (
    <EditorProvider extensions={extensions} content={content} className="border border-green-400">
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
};

export default Tiptap;
