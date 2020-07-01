import * as React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DevCard: React.FC = () => (
  <Card className="dev-card">
    <Card.Img variant="top" src="https://pic.mysku-st.ru/uploads/pictures/06/81/37/2018/07/22/b76793.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Card.Text>
      <Button variant="outline-primary" href="https://github.com/Yan-Black/RS-Lang">Git</Button>
    </Card.Body>
  </Card>
);

export default DevCard;
