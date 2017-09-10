import React, { Component } from 'react'
import  ReactMarkdown from 'react-markdown'
import {MarkdownEditor} from 'react-markdown-editor';
import {
    Upload,
    Modal,
    Button,
    Popconfirm,
    Form,
    Input,
    message,
    // Affix,
    Icon
  } from 'antd';
// import CodeMirror from 'react-codemirror';
import LzEditor from 'react-lz-editor'
var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'
class Editor extends Component {

    constructor(props){
        super(props)
        this.state = {
            htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                      <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
            markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
            responseList: []
          }
          this.receiveHtml=this.receiveHtml.bind(this);
   }
   receiveHtml(content) {
    console.log("recieved HTML content", content);
   }
    onChangeContent(e) {
        console.log(e)
        this.setState({content: e});
    }
    render() {
        var options = {
            lineNumbers: true,
        };
        return (
            <div className="EditorContent">
                
                 <div className="left-wrapper">
                    {/* <MarkdownEditor 
                        initialContent={this.state.content} 
                        iconsSet="font-awesome"
                        onContentChange={(e) => this.onChangeContent(e)}
                    /> */}
                    <LzEditor active={true}  importContent={this.state.htmlContent} cbReceiver={this.receiveHtml} 
        lang="en"/>
        <br/>
                </div>
                <div className="right-wrapper">
                    <div className="showContent">
                        <div  className="showContentTitle">
                            测试
                        </div>
                        <div  className="showContentContent">
                            <ReactMarkdown  source={this.state.htmlContent} theme='monokai' mode='markdown' /> 
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
};

export default Editor;