import React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/App/components/Input.jsx';
import Radio from '../src/App/components/Radio.jsx';
import Dropdown from '../src/App/components/Radio.jsx';
import TextSection from '../src/App/components/TextSection.jsx';

describe('Components rendering correctly in "debug" mode', () => {
  it('<Dropdown /> component should render', () => {
    const dropdownComponent = shallow(<Dropdown options={['A', 'B', 'C']} updateInput={() => {}} debug />);
    expect(dropdownComponent).toMatchSnapshot();
  });

  it('<Input /> component should render', () => {
    const inputComponent = shallow(<Input debug />);
    expect(inputComponent).toMatchSnapshot();
  });

  it('<Radio /> component should render', () => {
    const radioComponent = shallow(<Radio options={['A', 'B', 'C']} updateInput={() => {}} debug />);
    expect(radioComponent).toMatchSnapshot();
  });

  it('<TextSection /> component should render', () => {
    const textSectionComponent = shallow(<TextSection debug />);
    expect(textSectionComponent).toMatchSnapshot();
  });
});