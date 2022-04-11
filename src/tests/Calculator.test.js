import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers', ()=>{
    const button1 = container.find('#number1');
    const operatorAdd = container.find('#operator_add');
    const button4 = container.find('#number4');
    const operatorEqual = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    operatorEqual.simulate('click');
    expect(runningTotal.text()).toEqual('5')
    
  })

  it('should subtract two numbers', ()=>{
    const button7 = container.find('#number7');
    const operatorSubtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const operatorEqual = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEqual.simulate('click');
    expect(runningTotal.text()).toEqual('3')
    
  })

  it('should multiply two numbers', ()=>{
    const button3 = container.find('#number3');
    const operatorMultiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const operatorEqual = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    operatorMultiply.simulate('click');
    button5.simulate('click');
    operatorEqual.simulate('click');
    expect(runningTotal.text()).toEqual('15')
    
  })

  it('should divide two numbers', ()=>{
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const operatorDivide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const operatorEqual = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    operatorDivide.simulate('click');
    button7.simulate('click');
    operatorEqual.simulate('click');
    expect(runningTotal.text()).toEqual('3')
    
  })

  it('should concatenate multiple numbers',()=>{
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button3 = container.find('#number3');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('123')
  })

  it('should perform chained operations',()=>{
    const button2 = container.find('#number2');
    const operatorAdd = container.find('#operator_add');
    const button3 = container.find('#number3');
    const operatorSubtract = container.find('#operator-subtract');
    const button1 = container.find('#number1');
    const operatorEqual = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    operatorAdd.simulate('click');
    button3.simulate('click');
    operatorSubtract.simulate('click');
    button1.simulate('click');
    operatorEqual.simulate('click');
    expect(runningTotal.text()).toEqual('4')
  })

  it('should clear the running-total',() =>{
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const operatorAdd = container.find('#operator_add');
    const runningTotal = container.find('#running-total');
    const clearButton = container.find('#clear');
    const operatorEqual = container.find('#operator-equals')
    button1.simulate('click');
    operatorAdd.simulate('click');
    button2.simulate('click');
    operatorEqual.simulate('click');
    clearButton.simulate('click');
    expect(runningTotal.text()).toEqual('0')



  })
})



