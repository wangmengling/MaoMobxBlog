import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {observer} from 'mobx-react';
import {autorun} from 'mobx';
var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'

@observer
class EditorContaner extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"",
            htmlContent: EditorState.createEmpty()
        }
        this.receiveHtml = this.receiveHtml.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.commitAction = this.commitAction.bind(this);
        
   }

    componentWillMount(){
        this.props.store.statusCode = 0;
        this.addAutoRun()
    }
    receiveHtml(content) {
        this.setState({htmlContent: content});
    }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    commitAction() {
        const content = draftToHtml(convertToRaw(this.state.htmlContent.getCurrentContent()));
        this.props.store.addContent(this.state.title,content);
    }

    addAutoRun(){
        autorun(() => {
            console.log(this.props.store.statusCode)
            if (this.props.store.statusCode == 200) {
                this.props.history.push('/admin/list');
            }
        })
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
                            <button className="button" onClick={this.commitAction}>保存</button>
                        </span>
                    </div>
                    <div  className="InputContent">
                        <Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            editorState={this.state.htmlContent}
                            onEditorStateChange={this.receiveHtml}
                        />
                    </div>
                <br/>
                </div>
            </div>
        );
    }
};

export default withRouter(EditorContaner);