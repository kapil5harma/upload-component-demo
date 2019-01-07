import React, { Component } from 'react';

export default class UploadWithoutFilePreview extends Component {
  state = {
    fileList: []
  };

  componentDidMount = () => {
    (() => {
      let fileCatcher = document.getElementById('file-catcher');
      let fileInput = document.getElementById('file-input');
      let fileListDisplay = document.getElementById('file-list-display');

      let fileList = [];
      let renderFileList, sendFile;

      fileCatcher.addEventListener('submit', evnt => {
        evnt.preventDefault();
        fileList.forEach(file => {
          sendFile(file);
        });
      });

      fileInput.addEventListener('change', evnt => {
        for (let i = 0; i < fileInput.files.length; i++) {
          fileList.push(fileInput.files[i]);
        }
        renderFileList();
      });

      renderFileList = () => {
        fileListDisplay.innerHTML = '';
        fileList.forEach((file, index) => {
          let fileDisplayEl = document.createElement('li');
          fileDisplayEl.innerHTML = file.name;
          fileListDisplay.appendChild(fileDisplayEl);
        });
      };

      sendFile = file => {
        let formData = new FormData();
        let request = new XMLHttpRequest();

        formData.set('file', file);
        request.open('POST', 'https://jsonplaceholder.typicode.com/photos');
        request.send(formData);
      };
    })();
  };

  render() {
    return (
      <div>
        <form id='file-catcher'>
          <input
            id='file-input'
            type='file'
            multiple
            placeholder='Click here / Drag and drop files here..'
          />
          <button type='submit'>Submit</button>
        </form>

        <ul id='file-list-display' />
      </div>
    );
  }
}
