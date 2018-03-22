import React, { Component } from 'react';
import { Form, Input } from 'antd';

class Demo1 extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <Input {...getFieldProps('name')} />
      </div>
    );
  }
}

export default Form.create()(Demo1);