import React, { Component } from 'react';
import '../styles/App.css';
import { MyEditor } from '../components/editor/myEditor';
import "../components/styles/EditPost.css"
// import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



export default class EditPost extends Component {
  render() {
    return (
      <div className="editpage">
      <MyEditor/>
      
      </div>
    );
    
}
}


