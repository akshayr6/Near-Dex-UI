import React, { useState } from "react";
import {
  Button,
  Card,
  Modal,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import cryptologo from "../../assets/img/bnb.png";
import CryptoBtn from "./CryptoBtn";

const ConnectWallet = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={5} className="text-center">
            <Card className="bgtransparent border-0 mt-5">
              <Card.Body className="d-grid p-0">
                <Button
                  className="connectbtn py-3"
                  variant="dark"
                  size="lg"
                  onClick={handleShow}
                >
                  Connect Wallet
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="connectwalletmodal bg-dark"
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>
            Connect Wallet{" "}
            <p className="fs-16 mb-0 color-dove-grey">
              You need to connect a Solana wallet.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-4">
          <Row className="d-flex justify-content-evenly align-items-center"> 
            <CryptoBtn/>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ConnectWallet;
