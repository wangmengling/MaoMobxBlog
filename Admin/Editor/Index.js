import React, { Component } from 'react';
import EditorContaner from './EditorContaner';
import EditorStore from './EditorStore';
const editorStore = new EditorStore();
export default  () => (
    <EditorContaner store={editorStore}/>
)