import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Typography, Button, Card, message } from 'antd';
import API from '../api';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function DashboardPage() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const navigate = useNavigate();

  const fetchContacts = useCallback(async () => {
    try {
      const res = await API.get('/contacts');
      setContacts(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        console.error('Failed to fetch contacts:', err);
        message.error('Failed to load contacts.');
      }
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchContacts();
    }
  }, [fetchContacts, navigate]);

  const handleAdd = async (contact) => {
    try {
      await API.post('/contacts', contact);
      message.success('Contact added');
      fetchContacts();
    } catch (err) {
      console.error(err);
      message.error('Failed to add contact');
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await API.put(`/contacts/${id}`, updatedData);
      setEditingContact(null);
      message.success('Contact updated');
      fetchContacts();
    } catch (err) {
      console.error(err);
      message.error('Failed to update contact');
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/contacts/${id}`);
      message.success('Contact deleted');
      fetchContacts();
    } catch (err) {
      console.error(err);
      message.error('Failed to delete contact');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          backgroundColor: '#001529',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingInline: 24,
        }}
      >
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          📒 Contact Manager
        </Title>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </Header>

      <Content style={{ padding: 24, backgroundColor: '#f0f2f5' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card title="Add / Edit Contact" bordered={false}>
              <ContactForm
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                editingContact={editingContact}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Your Contacts" bordered={false}>
              <ContactList
                contacts={contacts}
                onEdit={setEditingContact}
                onDelete={handleDelete}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
