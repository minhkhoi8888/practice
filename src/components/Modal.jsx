import { Form, Input, Modal } from "antd";
import 'antd/dist/antd.css';
import "./Modal.css"


const ModalBox = ({ open, onCancel, onCreate }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            className = "modal"
            open = {open}
            title="Create a new account"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
    <Form 
        name = "modal"
        form={form}
        layout="vertical"
        initialValues={{
          modifier: 'public',
        }}
    >
        <Form.Item
            label = "Your name"
            name = "name"
            rules = {[
                {
                    required: true,
                    message: "please your name",
                }   
            ]}
        >
            <Input />
        </Form.Item>
        
    </Form> </Modal>
    );
}
 
export default ModalBox;