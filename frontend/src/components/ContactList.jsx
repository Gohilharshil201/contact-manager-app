import { Card, Typography, Button, Popconfirm, Empty } from 'antd';

const { Title, Text } = Typography;

export default function ContactList({ contacts, onEdit, onDelete }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <Title level={4} style={{ textAlign: 'center', marginBottom: 24 }}>
        📇 Contact List
      </Title>

      {contacts.length === 0 ? (
        <Empty description="No contacts yet" />
      ) : (
        contacts.map((contact) => (
          <Card
            key={contact._id}
            style={{ marginBottom: 16 }}
            hoverable
            type="inner"
            title={<Text strong>{contact.name}</Text>}
            extra={
              <>
                <Button
                  type="link"
                  onClick={() => onEdit(contact)}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure you want to delete this contact?"
                  onConfirm={() => handleDelete(contact._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="link" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </>
            }
          >
            <Text type="secondary">{contact.email}</Text>
            <br />
            <Text type="secondary">{contact.phone}</Text>
          </Card>
        ))
      )}
    </div>
  );
}
