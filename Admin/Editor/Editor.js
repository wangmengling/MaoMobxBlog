import React, { Component } from 'react'
import  ReactMarkdown from 'react-markdown'

var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'
class Editor extends Component {
    render() {
        return (
            <div className="EditorContent">
                 {/* <div className="left-wrapper">
                    <input type="text" id="titleInput" />
                    <ul className="tools"></ul>
                    <textarea id="articleInput"></textarea>
                </div>
                <div className="right-wrapper">
                    <div className="output">
                        <h1 id="titleOutput"></h1>
                        <div id="articleOutput"></div>
                    </div>
                </div> */}
                <ReactMarkdown source={input} escapeHtml={true}/>
            </div>
        );
    }
};

export default Editor;