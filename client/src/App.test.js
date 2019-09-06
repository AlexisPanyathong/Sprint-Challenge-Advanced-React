import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


describe('<App />', () => {
  it ('renders without crashing using ReactDOM', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
  
  it ('renders without crashing', () => {
    render(<App />)
  });


});


