import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Tabs Component', () => {
  it('renders without errors', () =>{
    const div = document.createElement('div');

    ReactDOM.render(<Tabs tabs={[{}]}/>, div);

    ReactDOM.unmountComponentAtNode(div);
  })
})

describe(`Tabs Component`, () => {
  // array of objects each with a name and content
  const tabsProp = [/* ... */];

  /* smoke test not shown */

  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />)
  toJson(wrapper)
})