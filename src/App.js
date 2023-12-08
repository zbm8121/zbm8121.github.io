import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import California from "./images/california.svg";
import Oregon from "./images/oregon.svg";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App-body">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="p-3" src={California} />
              <Card.Body>
                <Card.Title>Discover California</Card.Title>
                <Card.Text>
                  You might say Californians are serious about wine and relaxed
                  about everything else. But when you're surrounded by natural
                  wonder and constant sunshine, it's pretty easy to smile. Of
                  course, a glass of California wine always helps.
                </Card.Text>
                <Button
                  href="https://discovercaliforniawines.com/discover-california/"
                  target="_blank"
                >
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="p-2 pt-3 pb-1" src={Oregon} />
              <Card.Body>
                <Card.Title>Oregon Wine</Card.Title>
                <Card.Text>
                  It takes a certain character to grow an Oregon grape for an
                  Oregon wine. A character that honors the power of the land and
                  embraces—completely, unconditionally—this Oregon winemaking
                  thing.
                </Card.Text>
                <Button href="https://www.oregonwine.org/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
