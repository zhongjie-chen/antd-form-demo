import React, { Component } from 'react';
import { Form, Select, Button } from 'antd';

const Option = Select.Option;
const data = [
  { name: '全部', value: '0' },
  { name: '点我达', value: '1' },
  { name: '点我吧', value: '2' },
  { name: '饿了么', value: '3' },
]
class Demo3 extends Component {
  render() {
    const { getFieldProps, setFieldsValue, getFieldValue } = this.props.form;
    return (
      <div>
        <Select
          {...getFieldProps('name', {
          })}
          style={{ width: 800 }}
          mode="multiple"
          onChange={(nextValues) => {
            let targetValues = []
            const nowValues = getFieldValue('name') || [];
            if (nowValues.length > nextValues.length) {
              targetValues = nextValues;
            } else {
              const selectValue = nextValues.find(nv => nowValues.indexOf(nv) === -1)
              if (selectValue === '0') {
                targetValues = ['0']
              } else {
                targetValues = nextValues.filter(x => x !== '0');
              }
              
            }
            setTimeout(() => {
              setFieldsValue({ name: targetValues })
            }, 0);
          }}
        >
          {data.map((item) => <Option key={item.value}>{item.name}</Option>)}
        </Select>
      </div>
    );
  }
}

export default Form.create()(Demo3);