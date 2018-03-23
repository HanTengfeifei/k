import { Button, Modal, Form, Input, Radio } from 'antd';
import React from 'react';
import $ from "jquery";
import "./AddTest.less";
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (

      <Modal
        wrapClassName="vertical-center-modal"
        className={"modal"}
        style={{height:"100%"}}
        visible={visible}
        title="Create a new collection"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="任意字符或字符串">
            {getFieldDecorator('ref', {
              rules: [{ required: true, message: 'Please input the ref of collection!' }],
            })(
              <Input  type="text"/>
            )}
          </FormItem>
          <FormItem label="题干">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the 题干 of collection!' }],
            })(
              <Input  type="text" />
            )}
          </FormItem>
          <FormItem label="第一个选项">
            {getFieldDecorator('first', {
              rules: [{ required: true, message: 'Please input the first option' }],
            })(
              <Input type={"text"} />
            )}
          </FormItem>
          <FormItem label="第二个选项">
            {getFieldDecorator('second', {
              rules: [{ required: true, message: 'Please input the second option' }],
            })(
              <Input  type={"text"}/>
            )}
          </FormItem>
          <FormItem label="第三个选项">
            {getFieldDecorator('third', {
              rules: [{ required: true, message: 'Please input the third option' }],
            })(
              <Input type={"text"} />
            )}
          </FormItem>
          <FormItem label="第四个选项">
            {getFieldDecorator('fourth', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem label="正确答案的序号数">
            {getFieldDecorator('answer')(<Input type="number" />)}
          </FormItem>
          <FormItem className="collection-create-form_last-form-item">
            {getFieldDecorator('modifier', {
              initialValue: 'public',
            })(
              <Radio.Group>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      </Modal>

    );
  }
);

class AddTest extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.form;
    const context=this;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      $.ajax({
        url: 'http://localhost:3000/test',
        type: 'post',
        dataType: 'json',
        data:JSON.stringify( values),
        headers: {
          'Content-Type': 'application/json'
        },

        success: function (data) {

           console.log(data);
            alert("添加成功！");





        }
      });


      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Create Test questions</Button>
        <CollectionCreateForm
          className="primary"
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default AddTest;
