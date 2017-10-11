import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'

class EditorContaner extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"",
            htmlContent:''
          }
          this.receiveHtml=this.receiveHtml.bind(this);
          this.onChangeTitle=this.onChangeTitle.bind(this);
   }
   receiveHtml(content) {
        this.setState({htmlContent: content});
   }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    render() {
        return (
            <div className="EditorContent">
                 <div className="left-wrapper EditorContentInput">
                    <div className="InputTitle">
                        <span className="titleRight">
                            <input placeholder="请输入标题" value = {this.state.title} onChange={this.onChangeTitle}/>
                        </span>
                        <span className="saveButton">
                            <Link to="/admin/detail">
                                <button className="button">保存</button>
                            </Link>
                        </span>
                    </div>
                    <div  className="InputContent">
                        <Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.receiveHtml}
                        />
                    </div>
                <br/>
                </div>
            </div>
        );
    }
};

export default EditorContaner;