import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import errorImg from '../resources/error404.gif';

const Error404 = (props) => {

  return (

    <Col sm={8} className="m-auto">
      <img
        className="d-block mx-auto img-fluid w-50 mt-4"
        src={errorImg}
        alt="mysvg"
      />
    </Col>

  );
}
export default Error404;