import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'antd';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import LzEditor from 'react-lz-editor'
import antdScss from 'antd/dist/antd.css';

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
            htmlContent: EditorState.createEmpty(),
            markdownContent: ""
        }
        this.receiveHtml = this.receiveHtml.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.commitAction = this.commitAction.bind(this);
        this.receiveMarkdown = this.receiveMarkdown.bind(this);
        
   }

    componentWillMount(){
        this.props.store.statusCode = 0;
        console.log(this.props.articleModel.location.state.articleModel);
        // htmlToDraft(this.props.articleModel.location.state.articleModel.content);
        if (this.props.articleModel.location.state) {
            this.setState({
                markdownContent:this.props.articleModel.location.state.articleModel.content,
                title:this.props.articleModel.location.state.articleModel.title
            })
        }
        this.addAutoRun()
    }
    receiveHtml(content) {
        this.setState({htmlContent: content});
    }

    receiveMarkdown(content) {
        this.setState({markdownContent: content});
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
            if (this.props.store.statusCode == 1) {
                this.props.history.push('/admin/list');
            }
        })
    }
    

    render() {
        return (
            <div className="EditorContent">
                <style dangerouslySetInnerHTML={{ __html: antdScss }} />
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
                        {/* <Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            editorState={this.state.htmlContent}
                            onEditorStateChange={this.receiveHtml}
                        /> */}
                        {/* <LzEditor active={true} importContent={this.state.markdownContent} cbReceiver={this.receiveHtml}/> */}
                        <LzEditor
                            active={true}
                            importContent={this.state.markdownContent}
                            cbReceiver={this.receiveMarkdown}
                            image={false}
                            video={false}
                            audio={false}
                            convertFormat="html"
                        />
                        {/* <LzEditor
                            active={true}
                            importContent={this.state.markdownContent}
                            cbReceiver={this.receiveMarkdown}
                            image={false}
                            video={false}
                            audio={false}
                            convertFormat="markdown"
                        /> */}
                    </div>
                <br/>
                </div>
            </div>
        );
    }
};

export default withRouter(EditorContaner);