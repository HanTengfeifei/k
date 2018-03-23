import { Button, Modal, Form, Input, Radio } from 'antd';
import React from 'react';
import $ from "jquery";
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        style={{height:"100%"}}
        visible={visible}
        title="添加听力"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="视频名称:">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input  type="text"/>
            )}
          </FormItem>
          <FormItem label="视频链接:">
            {getFieldDecorator('url', {
              rules: [{ required: true, message: 'Please input the location（url） of collection!' }],
            })(
              <Input  type="text" />
            )}
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

class AddVideo extends  React.Component {
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
        url: 'http://localhost:3000/video',
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
        <Button type="primary" onClick={this.showModal}>Create Video </Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default AddVideo;
