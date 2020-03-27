import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextField } from '../src/TextField';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
