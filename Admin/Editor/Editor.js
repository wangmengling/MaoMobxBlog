import React, { Component } from 'react'
import  ReactMarkdown from 'react-markdown'
import {MarkdownEditor} from 'react-markdown-editor';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// import CodeMirror from 'react-codemirror';
import LzEditor from 'react-lz-editor'
var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'
class Editor extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"asdfasd",
            htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                      <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
            markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
            responseList: []
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
        var options = {
            lineNumbers: true,
        };
        return (
            <div className="EditorContent">
                
                 <div className="left-wrapper EditorContentInput">
                    {/* <MarkdownEditor 
                        initialContent={this.state.htmlContent} 
                        iconsSet="font-awesome"
                        onContentChange={this.receiveHtml}
                    /> */}
                    
                    <div className="InputTitle">
                        <span className="titleRight">
                            <input placeholder="请输入标题" onChange={this.onChangeTitle}/>
                        </span>
                        <span className="saveButton">
                            <Link to="/admin/detail">
                                <button className="button">保存</button>
                            </Link>
                        </span>
                    </div>
                    <div  className="InputContent">
                        <LzEditor active={true}  importContent={this.state.htmlContent} cbReceiver={this.receiveHtml} 
        lang="en"/>
                    </div>
                    
        <br/>
                </div>
                {/* <div className="right-wrapper">
                    <div className="showContent">
                        <div  className="showContentTitle">
                            {this.state.title}
                        </div>
                        <div  className="showContentContent">
                            <ReactMarkdown  source={this.state.htmlContent} theme='monokai' mode='markdown' /> 
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
};

export default Editor;