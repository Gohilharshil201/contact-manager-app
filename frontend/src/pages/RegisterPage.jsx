import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Typography, Card, Row, Col, message } from 'antd';

const { Title, Text } = Typography;

export default function RegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      message.success('Registered successfully! Redirecting...');
      navigate('/login');
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', background: '#141414' }}>
      <Col xs={22} sm={18} md={12} lg={8}>
        <Card
          style={{ backgroundColor: '#1f1f1f', borderRadius: 12 }}
          bordered={false}
        >
          <Title level={2} style={{ textAlign: 'center', color: '#fff' }}>
            Create Account
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label={<Text style={{ color: '#ccc' }}>Full Name</Text>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: '#ccc' }}>Email</Text>}
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Enter a valid email' },
              ]}
            >
              <Input placeholder="email@example.com" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: '#ccc' }}>Password</Text>}
              name="password"
              rules={[{ required: true, message: 'Please enter a password' }]}
            >
              <Input.Password placeholder="••••••••" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
              >
                {loading ? 'Registering...' : 'Register'}
              </Button>
            </Form.Item>
          </Form>

          <Text type="secondary" style={{ display: 'block', textAlign: 'center' }}>
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </Text>
        </Card>
      </Col>
    </Row>
  );
}
