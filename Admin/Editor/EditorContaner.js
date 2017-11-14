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
import { Button,Input,Select } from 'antd';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import LzEditor from 'react-lz-editor'
import antdScss from 'antd/dist/antd.css';

import {observer} from 'mobx-react';
import {autorun} from 'mobx';
var input = '## This is a header\n\n*And this is a paragraph*';
import './Editor.scss'
const Option = Select.Option;
@observer
class EditorContaner extends Component {

    constructor(props){
        super(props)
        this.state = {
            title:"",
            htmlContent: EditorState.createEmpty(),
            summary:"",
            markdownContent: "",
            articleModel:{},
            category:'',
            tag:new Array(0)
        }
        this.receiveHtml = this.receiveHtml.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.commitAction = this.commitAction.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);
        this.receiveMarkdown = this.receiveMarkdown.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
   }

    componentWillMount(){
        this.props.store.getTagList();
        this.props.store.getCagegoryList();
        this.props.store.statusCode = 0;
        
        console.log(this.props);
        if (this.props.location.state) {
            htmlToDraft(this.props.location.state.articleModel.content);
            this.setState({
                markdownContent:this.props.location.state.articleModel.content,
                title:this.props.location.state.articleModel.title,
                summary:this.props.location.state.articleModel.summary,
                category:this.props.location.state.articleModel.category,
                articleModel:this.props.location.state.articleModel
            }, () => {
                let tags = new Array();
                this.state.articleModel.tag.map(
                    value => tags.push(value)
                )
                console.log(tags);
                this.setState({tag:tags},()=>{
                    console.log(this.state.tag);
                });
            });
            
              
            
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

    onChangeSummary(e) {
        this.setState({summary: e.target.value});
    }

    onChangeCategory(e){
        this.setState({category:e});
        console.log(e);
    }

    onChangeTag(e){
        this.setState({tag:e});
        
    }

    commitAction() {
        if (this.state.articleModel._id) {
            let article = {
                _id:this.state.articleModel._id,
                title:this.state.title,
                summary:this.state.summary,
                content:this.state.markdownContent,
                category:this.state.category,
                tag:this.state.tag
            };
            this.props.store.updateContent(article);
        }else {
            let article = {
                title:this.state.title,
                summary:this.state.summary,
                content:this.state.markdownContent,
                category:this.state.category,
                tag:this.state.tag
            };
            console.log(article);
            
            this.props.store.addContent(article);
        }
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
                    <div className="Summary">
                        <Input.TextArea placeholder="请输入简介" rows={4} className="SummaryTextArea" value = {this.state.summary} onChange={this.onChangeSummary}/>
                    {/* <input placeholder="请输入简介" value = {this.state.summary} onChange={this.onChangeSummary}/> */}
                        {/* <textarea placeholder="请输入简介" value = {this.state.summary} onChange={this.onChangeSummary}/> */}
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
                    <div  className="TypeSelect">
                        <Select defaultValue={this.state.category} style={{ width: 120 }} onChange={this.onChangeCategory}>
                            { this.props.store.categoryList.map(
                                (category, idx) => <Option key={idx} value={category.name}>{category.name}</Option>
                            ) }
                        </Select>
                        <Select tags
                            style={{ width: '50%' ,marginLeft:'20px'}}
                            searchPlaceholder="标签模式"
                            onChange={this.onChangeTag}
                            defaultValue={this.state.tag}
                        >
                            { this.props.store.tagList.map(
                                (tag, idx) => <Option key={idx} value={tag.name}>{tag.name}</Option>
                            ) }
                        </Select>
                        {/* {this.state.tag} */}
                    </div>
                <br/>
                </div>
            </div>
        );
    }
};

export default withRouter(EditorContaner);