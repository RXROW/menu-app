import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Items = ({ itemsData }) => {
  return (
    <Row>
      {itemsData   ? (
        itemsData.map((item) => {
          return(
          <Col key={item.id} sm="12 " className="my-3">
            <Card className="d-flex flex-column flex-lg-row ">
              <Card.Img
                className="img-item"
                variant="top"
                src={item.imgUrl}
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div> {item.title}</div>
                  <div style={{ color: "red" }}> {item.price}</div>
                </Card.Title>
                <Card.Text className="pt-5 text-muted">
               {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
        })
      ) : (
        <div className="text-center"> لايوجد بيانات </div>
      )}
    </Row>
  );
};

export default Items;
