import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const CardTitle = () => {
  return (
    <>
      <Card className="bgtransparent border-0 text-center cardtitle py-5">
        <Card.Body>
          <h1 className="fw-seibold white fs-32">
            For <span className="linear-wipe">smart traders</span>{" "}
            <p>who like money</p>
          </h1>
          <Button variant="outline-light" className="border-0 color-grey">
            The JUP Promise <AiOutlineArrowRight />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTitle;
