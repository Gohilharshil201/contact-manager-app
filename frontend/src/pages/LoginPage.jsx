import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Row, Col, message } from "antd";
import API from "../api";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await API.post("/auth/login", values);
      localStorage.setItem("token", res.data.token);
      message.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Login failed. Check your email/password.";
      message.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#141414" }}
    >
      <Col xs={22} sm={18} md={12} lg={8}>
        <Card
          style={{ backgroundColor: "#1f1f1f", borderRadius: 12 }}
          bordered={false}
        >
          <Title level={2} style={{ textAlign: "center", color: "#fff" }}>
            Welcome👋
          </Title>

          <Form
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label={<Text style={{ color: "#ccc" }}>Email</Text>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="email@example.com" />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: "#ccc" }}>Password</Text>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password placeholder="••••••••" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form.Item>
          </Form>

          <Text
            type="secondary"
            style={{ display: "block", textAlign: "center", color: "white" }}
          >
            Don’t have an account? <Link to="/register">Register</Link>
          </Text>
        </Card>
      </Col>
    </Row>
  );
}
