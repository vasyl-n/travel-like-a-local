import React from 'react'
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/jsx/App.jsx'

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

describe('<App />', () => {
  
  it(' renders App without crashing', () => {
    expect(2+2).toBe(4);
  })
  
})