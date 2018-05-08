import React from 'react'
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/jsx/App.jsx'

configure({ adapter: new Adapter() });

// test file

import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<App />);

describe('<App />', () => {
  
  it(' renders App without crashing', () => {
    expect(2+2).toBe(4);
  })
  
})