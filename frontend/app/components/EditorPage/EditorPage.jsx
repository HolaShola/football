import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './EditorPage.css';

class EditorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={(editor) => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        );
    }
}

export default EditorPage;
