import React, { Component } from 'react';
import { Form, Select } from 'antd';

const Option = Select.Option;
const data = [
  { name: '全部', value: '0' },
  { name: '点我达', value: '1' },
  { name: '点我吧', value: '2' },
  { name: '饿了么', value: '3' },
]
class Demo4 extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <Select
          {...getFieldProps('name', {
            normalize: (value, prevValue, allValues) => {
              let targetValues = []
              const nowValues = prevValue || [];
              if (nowValues.length > value.length) {
                targetValues = value;
              } else {
                const selectValue = value.find(nv => nowValues.indexOf(nv) === -1)
                if (selectValue === '0') {
                  targetValues = ['0']
                } else {
                  targetValues = value.filter(x => x !== '0');
                }
              }
              return targetValues;
            }
          })}
          style={{ width: 800 }}
          mode="multiple"
        >
          {data.map((item) => <Option key={item.value}>{item.name}</Option>)}
        </Select>
      </div>
    );
  }
}

export default Form.create()(Demo4);