import React from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div>
      <section className="mt-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col md={5}>
              <Card className="swap-card mt-5">
                <Card.Body className="p-1">
                  <InputGroup className="mb-0 p-1">
                      <FiSearch size="30" className="color-dove-grey"/>
                    <FormControl
                    className="text-start"
                      placeholder="You can try “10 GST to USDC”"
                    />
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SearchBox;
