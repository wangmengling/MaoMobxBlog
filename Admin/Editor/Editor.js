import React, { Component } from 'react'
// import  ReactMarkdown from 'react-markdown'
import MarkdownInput from '@opuscapita/react-markdown'
var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'
class Editor extends Component {
    render() {
        return (
            <div className="EditorContent">
                 <div className="left-wrapper">
                    <MarkdownInput onChange/>
                </div>
                <div className="right-wrapper">
                    <div className="output">
                        <h1 id="titleOutput"></h1>
                        <div id="articleOutput"></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Editor;