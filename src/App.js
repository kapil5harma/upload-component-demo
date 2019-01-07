import React, { Component } from 'react';
import './App.css';
import UploadWithFilePreview from './components/UploadWithFilePreview';
import UploadWithoutFilePreview from './components/UploadWithoutFilePreview';

class App extends Component {
  state = {
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc'
    ]
  };
  handleDrop = files => {
    let fileList = this.state.files;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }
    this.setState({ files: fileList });
  };
  render() {
    return (
      <div className='App'>
        <div className='comp comp-1'>
          <h3>Component with file preview:</h3>
          <UploadWithFilePreview />
        </div>
        <div className='comp comp-2'>
          <h3>Component without file preview:</h3>
          <UploadWithoutFilePreview />
        </div>
      </div>
    );
  }
}

export default App;
