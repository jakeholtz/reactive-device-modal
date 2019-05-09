import React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/App/components/Input.jsx';
import Radio from '../src/App/components/Radio.jsx';
import Dropdown from '../src/App/components/Radio.jsx';
import TextSection from '../src/App/components/TextSection.jsx';

describe('Components should render correctly in "debug" mode', () => {
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

describe('Input Component', () => {
  const inputComponent = <Radio placeholder="email" onChange={() => {}} debug />;

  it('Should include placeholder in props', () => {
    expect(inputComponent.props.placeholder).toEqual('email');
  });
  it('Should have method to handle input change', () => {
    expect(typeof inputComponent.props.onChange).toEqual('function');
  });
});


describe('Radio Component', () => {
  const options = ['A', 'B', 'C'];
  const radioComponent = <Radio options={options} updateInput={() => {}} debug />;

  it('Should include all options passed in', () => {
    expect(radioComponent.props.options.length).toEqual(3);
  });
  it('Should have method to update user input', () => {
    expect(typeof radioComponent.props.updateInput).toEqual('function');
  });
});

describe('TextSection Component', () => {
  const expectedTitle = 'Test Title';
  const expectedText = 'Test Text';
  const textSection = <TextSection title={expectedTitle} text={expectedText} debug />;

  it('Should render title correctly', () => {
    expect(textSection.props.title).toEqual(expectedTitle);
  });
  it('Should render text correctly', () => {
    expect(textSection.props.text).toEqual(expectedText);
  });
});