import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Form, Card, Button, Col, Row } from 'react-bootstrap';
import { login, saveQuestionAnswer, changeCurrentPage } from "../actions/actions";

const ViewQuestionToAnswer = (props) => {
  const id  = props.id;
  const history = useHistory();
  const [checkValue, setCheckValue] = useState("");

  return (
    <div className="col d-flex justify-content-center mt-5" style={{ width: "100%" }}>
      {id && props.questions && <Card style={{ width: "50%" }}>
        <Card.Header>Create New Question</Card.Header>
        <Row>
          <Col sm={2}>
            <Card.Img variant="top" src={props.users[props.questions[id].author].avatarURL} className="cardImg" />
          </Col>
          <Col sm={10}>
            <Card.Body>
              <Card.Title>Complete the Question</Card.Title>
              <Card.Text>
                Would you rather ....
              </Card.Text>
              <Form.Group as={Row} className="mb-3">

                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label={props.questions[id].optionOne.text}
                    name="optionOne"
                    id="check"
                    onChange={() => { setCheckValue("optionOne") }}
                    checked={checkValue === "optionOne"}
                  />

                  <Form.Check
                    type="radio"
                    label={props.questions[id].optionTwo.text}
                    name="optionTwo"
                    id="check"
                    onChange={() => { setCheckValue("optionTwo") }}
                    checked={checkValue === "optionTwo"}
                  />

                </Col>
              </Form.Group>

              <Button variant="primary"
                onClick={() => {
                  if (checkValue) {
                    let data = { authedUser: props.user.id, qid: id, answer: checkValue }
                    props.saveQuestionAnswer(data, props.user);
                    props.changeCurrentPage("home");
                    history.push("/");
                  }
                }}
              >

                Submit
              </Button>
            </Card.Body>
          </Col>
        </Row>

      </Card>

      }
    </div>

  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    questions: state.questions,
    redirectPagePath: state.redirectPagePath

  }
}
const mapDispatch = dispatch => {
  return {
    login: (user, page) => dispatch(login(user, page)),
    changeCurrentPage: (page) => dispatch(changeCurrentPage(page)),
    saveQuestionAnswer:(question, user)=>saveQuestionAnswer(dispatch,question, user)

  }
}
export default connect(mapStateToProps, mapDispatch)(ViewQuestionToAnswer);