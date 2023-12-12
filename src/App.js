import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import California from "./images/california.svg";
import Oregon from "./images/oregon.svg";
import Washington from "./images/washington.svg";
import NewYork from "./images/new-york.png";
import Australia from "./images/australia.png";
import NewZealand from "./images/new_zealand.svg";
import Chile from "./images/chile.svg";
import Argentina from "./images/argentina.png";
import SouthAfrica from "./images/south_africa.png";
import Champagne from "./images/champagne.png";
import Bourgogne from "./images/bourgogne.svg";
import Bordeaux from "./images/bordeaux.svg";
import Italy from "./images/italy.svg";
import Spain from "./images/spain.png";
import Portugal from "./images/portugal.svg";

import "./App.css";

function App() {
  return (
    <div>
      <div className="pb-3">
        <Navbar fixed="top" className="bg-warning">
          <Navbar.Brand href="/" className="navigation">Wines of the World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Wine Regions</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="pt-5 pb-2 bg-dark-subtle">
        <Row xs={1} sm={1} md={3} lg={5} className="g-4 px-2">
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img variant="top" className="p-3" src={California} />
              <Card.Body>
                <Card.Title>California Wines</Card.Title>
                <Card.Text>
                  When you're surrounded by natural wonder and constant
                  sunshine, it's pretty easy to smile. Of course, a glass of
                  California wine always helps.
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
          <Col className="pt-3">
            <Card className="bg-secondary-subtle">
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
          <Col className="pt-5">
            <Card className="bg-secondary-subtle">
              <Card.Img variant="top" className="p-2 pt-3 pb-1" src={NewYork} />
              <Card.Body>
                <Card.Title>New York Wines</Card.Title>
                <Card.Text>
                  Boldly, rooted. Boldly, evolving. Boldly, NY. Boldly, nuanced.
                  Boldly, open. Boldly NY.
                </Card.Text>
                <Button href="https://newyorkwines.org/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Argentina}
              />
              <Card.Body>
                <Card.Title>Wines of Argentina</Card.Title>
                <Card.Text>
                  Argentina is a wine country that can be discovered and enjoyed
                  from north to south.
                </Card.Text>
                <Button
                  href="https://www.winesofargentina.org/en/"
                  target="_blank"
                >
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Washington}
              />
              <Card.Body>
                <Card.Title>Washington Wine</Card.Title>
                <Card.Text>
                  Unparalled. Get to know why Washington is the most exciting
                  wine region in the world.
                </Card.Text>
                <Button href="https://www.washingtonwine.org/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img variant="top" className="p-2 pt-3 pb-1" src={Italy} />
              <Card.Body>
                <Card.Title>Italian Wine Central</Card.Title>
                <Card.Text>
                  Your first stop for information about the wines of Italy.
                </Card.Text>
                <Button href="https://italianwinecentral.com/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-2">
            <Card className="bg-secondary-subtle">
              <Card.Img variant="top" className="p-2 pt-3 pb-1" src={Chile} />
              <Card.Body>
                <Card.Title>Wines of Chile</Card.Title>
                <Card.Text>
                  Wine is in our nature. Chilean Wines is proudly shaking up the
                  global wine scene.
                </Card.Text>
                <Button href="https://www.winesofchile.org/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-4">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={NewZealand}
              />
              <Card.Body>
                <Card.Title>New Zealand Wine</Card.Title>
                <Card.Text>Altogether Unique.</Card.Text>
                <Button href="https://www.nzwine.com/en/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-2">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={SouthAfrica}
              />
              <Card.Body>
                <Card.Title>Wines of South Africa</Card.Title>
                <Card.Text>Welcome to our world of discovery.</Card.Text>
                <Button href="https://www.wosa.co.za/home/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Champagne}
              />
              <Card.Body>
                <Card.Title>Champagne</Card.Title>
                <Card.Text>
                  Terroir, Tradition, and Modernity. Delve into the fascinating
                  world of Champagne.
                </Card.Text>
                <Button href="https://www.champagne.fr/en/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Bourgogne}
              />
              <Card.Body>
                <Card.Title>Vins De Bourgogne</Card.Title>
                <Card.Text>
                  Bourgogne and its appellations. Famous for its prestigious
                  Climats, classified as Premier and Grand Crus, Bourgogne also
                  offers some delightful Village and Régionale appellations.
                </Card.Text>
                <Button href="https://www.bourgogne-wines.com/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-1">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Bordeaux}
              />
              <Card.Body>
                <Card.Title>Vins De Bordeaux</Card.Title>
                <Card.Text>
                  Diversity is a strength and an asset, and that's a fact! In
                  the Bordeaux terroir, diversity is found everywhere: in the
                  land, in the people, and most of all in the wines.
                </Card.Text>
                <Button href="https://www.bordeaux.com/us/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-2">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Australia}
              />
              <Card.Body>
                <Card.Title>Wine Australia</Card.Title>
                <Card.Text>Wine Australia for Australian wine.</Card.Text>
                <Button href="https://www.wineaustralia.com/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-1">
            <Card className="bg-secondary-subtle">
              <Card.Img
                variant="top"
                className="p-2 pt-3 pb-1"
                src={Portugal}
              />
              <Card.Body>
                <Card.Title>Wines of Portugal</Card.Title>
                <Card.Text>
                  A world of difference. Because it's all about difference, when
                  we talk about Portuguese wines.
                </Card.Text>
                <Button href="https://winesofportugal.com/en/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary-subtle">
              <Card.Img variant="top" className="p-2 pt-3 pb-1" src={Spain} />
              <Card.Body>
                <Card.Title>Spanish Wines</Card.Title>
                <Card.Text>
                  If you had to determine a national drink for Spain, no doubt
                  it would be Spanish wines.
                </Card.Text>
                <Button href="https://www.spanish-wines.org/" target="_blank">
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
