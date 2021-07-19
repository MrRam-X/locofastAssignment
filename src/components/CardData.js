import React, { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Form,
  Figure,
  Button,
  Modal,
} from "react-bootstrap";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import "./CardData.css";

export default function CardData({ url, title, colors }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="card"
        onClick={handleShow}
        style={{ width: "18rem", marginBottom: "1em" }}
      >
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <small className="text-muted">{colors}</small>
        </Card.Body>
      </Card>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Material details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12} lg={4}>
                <Figure>
                  <Figure.Image src={url} />
                </Figure>
              </Col>
              <Col sm={12} lg={8}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <KeyboardBackspaceIcon />
                  <h4 style={{ margin: "10px 5px" }}>Assign to factory</h4>
                </div>

                <Form>
                  <Form.Group>
                    <Form.Label>Factory</Form.Label>
                    <Form.Control as="select" defaultValue="Select factory">
                      <option selected disabled hidden>
                        Select factory
                      </option>
                      <option>Amaya Creation</option>
                      <option>Siddharth Designs</option>
                      <option>Crimson Creation</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Assign for design</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Search by Name or Design ID"
                    >
                      <option selected disabled hidden>
                        Search by Name or Design ID
                      </option>
                      <option>Design name 1</option>
                      <option>Design name 2</option>
                      <option>Design name 3</option>
                      <option>Design name 4</option>
                      <option>Design name 5</option>
                      <option>Design name 6</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={7}>
                        <Form.Label>Assign quantity</Form.Label>
                        <Form.Control placeholder="Enter quantity" />
                      </Col>
                      <Col>
                        <Form.Label>Available Inventory</Form.Label>
                        <div>1000 meters</div>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.File label="Attach Challan" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
