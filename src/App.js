import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import CardData from "./components/CardData";

const data = [
  {
    img: "https://pbs.twimg.com/media/DXsAf1KVAAMrzfE.jpg",
    title: "100% Cotton Design",
    colors: "8 more colors",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1c676f14388241.562830195709d.JPG",
    title: "100% Cotton Design",
    colors: "8 more colors",
  },
  {
    img: "https://clothandpaperstudio.com.au/wp-content/uploads/2017/05/Screen-Shot-2017-05-25-at-12.36.33-pm.png",
    title: "100% Cotton Design",
    colors: "8 more colors",
  },
];

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="main-nav">
          <li style={{ fontSize: "1.5em" }}>Material Library</li>
          <li>
            <Button>Add new</Button>
          </li>
        </ul>
      </nav>
      <section className="information">
        {" "}
        Info:- Click on the designs to send them
      </section>
      <main>
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {data.map((item) => {
              return (
                <Col sm={12} md={6} lg={3}>
                  <CardData
                    url={item.img}
                    title={item.title}
                    colors={item.colors}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
