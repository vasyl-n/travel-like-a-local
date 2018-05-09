import React from 'react'
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/jsx/App.jsx'

configure({ adapter: new Adapter() });



describe('<App />', () => {
  
  const app = shallow(<App username= {"z@z.com"} />);;
  
  it('renders App without crashing', async () => {
    await expect(2+2).toBe(4);
  })
  
  it('renders nested Nav component', async () => {
    await expect(app.find('Nav').length).toEqual(1)
  })
  
})


