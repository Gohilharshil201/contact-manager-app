import { useEffect } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

export default function ContactForm({ onAdd, onUpdate, editingContact }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingContact) {
      form.setFieldsValue({
        name: editingContact.name || '',
        email: editingContact.email || '',
        phone: editingContact.phone || '',
      });
    } else {
      form.resetFields();
    }
  }, [editingContact, form]);

  const handleFinish = async (values) => {
    try {
      if (editingContact) {
        await onUpdate(editingContact._id, values);
      } else {
        await onAdd(values);
      }
      form.resetFields();
    } catch (err) {
      console.error('Failed to submit contact form:', err);
    }
  };

  return (
    <>
      <Title level={4} style={{ textAlign: 'center', marginBottom: 24 }}>
        {editingContact ? '✏️ Edit Contact' : '➕ Add New Contact'}
      </Title>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter a name' }]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: 'Please enter an email' },
            { type: 'email', message: 'Enter a valid email' },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter a phone number' }]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
          >
            {editingContact ? 'Update Contact' : 'Add Contact'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
