import React from 'react';
import Editor, { MDEditorProps } from '@uiw/react-md-editor';
import Preview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = (props: MDEditorProps) => {
	return <Editor {...props} />;
};

export const MDPreview = (props: MarkdownPreviewProps) => {
	return <Preview {...props} />;
};

export default MDEditor;
