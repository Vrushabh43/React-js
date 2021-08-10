import "./Form.css"
import { Form, Input, Checkbox,Button } from 'antd';
import 'antd/dist/antd.css'; 
import { Link } from "react-router-dom";



const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    

  return (
    <div className="form-container">

<Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nickname"
        name="Nickname"
        rules={[{ required: true, message: 'Please input your Nickname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Link to ="/logout">
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Link>
      </Form.Item>
    </Form>
  

</div>

  );
};

export default NormalLoginForm;