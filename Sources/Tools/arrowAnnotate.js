import React from 'react';
import ReactDOM from 'react-dom';

let componentRoot = null;

export function TextEditorComponent(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      Hello world
    </div>
  );
}

export function getTextCallback(done) {
  componentRoot = document.createElement('div');
  document.body.appendChild(componentRoot);

  ReactDOM.render(<TextEditorComponent />, componentRoot);
}

export function changeTextCallback(data, eventData, done) {}

export default {
  getTextCallback,
  changeTextCallback,
  TextEditorComponent,
};
