import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
//, convertFromRaw
import { Editor } from 'react-draft-wysiwyg';
import {Link } from 'react-router-dom';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class MyEditor extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     editorState: EditorState.createEmpty(),
     userid: null
     };
   }


 onEditorStateChange = editorState => {
    this.setState({ editorState });
 };

 handleSubmit = (e) => {
    e.preventDefault()
    var convertedData = convertToRaw(this.state.editorState.getCurrentContent())
    fetch('http://localhost:5000/users/' + localStorage.getItem('userID') + '/posts', {
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer '+ localStorage.getItem('token'),
            // 'Accept': '*/*',
            'Content-Type': 'application/json',
            // 'Accept-Encoding':'gzip, deflate, br',
            // 'Connection':'keep-alive'
        },
        body: JSON.stringify({ 
            content : convertedData,
        })
    })
    .then(resp => {
        if(resp.ok){
            window.location.href = "http://localhost:3000/Home";

        }else{
            window.alert("Error: Could not submit post");
            return Promise.reject(resp);
        }
      });
  }


render() {
return (
  <div>
    <Editor 
      editorState={this.state.editorState}
      wrapperClassName="rich-editor demo-wrapper"
      editorClassName="editer-content"
      onEditorStateChange={this.onEditorStateChange}
      placeholder=" The message goes here..." 
      toolbar={{
        list: { inDropdown: true },
        link: { inDropdown: true },
      }}
      />
      <Link to="/"><button className="btn btn-outline-danger">Cancel</button></Link>
      <Link to="/"><button className="btn btn-outline-secondary">Draft</button></Link>

      <Link to="/"><button className="btn btn-info" onClick={this.handleSubmit} id = "post-submit-button" >Submit</button></Link>
   
  </div>
);
} }
export { MyEditor };