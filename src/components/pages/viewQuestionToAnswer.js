import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { _saveQuestionAnswer, _getUsers, _getQuestions } from '../../_DATA';
import React, { useEffect, useState } from 'react';
import { Form, Card, Button, Col, Row } from 'react-bootstrap';
import { login, setUsers, setQuestions } from "../actions/actions";

const ViewQuestionToAnswer = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [checkValue, setCheckValue] = useState("");

  useEffect(() => {
    if (!props.user) {
      history.push("/log");
    }
  }, [props.user])


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

                    var promise = new Promise((resolve, reject) => {
                      _saveQuestionAnswer(data);
                      resolve("Promise resolved successfully");
                    });

                    promise.then(() => {
                      _getUsers()
                        .then(res => {
                          props.setUsers(res);
                          props.login(res[props.user.id]);
                        });
                    })
                      .then(() => {
                        _getQuestions()
                          .then(res => {
                            props.setQuestions(res);
                          });
                      })
                      .then(() => {
                        history.push("/");
                      });
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
    questions: state.questions
  }
}
const mapDispatch = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    setUsers: (users) => dispatch(setUsers(users)),
    setQuestions: (questions) => dispatch(setQuestions(questions))

  }
}
export default connect(mapStateToProps, mapDispatch)(ViewQuestionToAnswer);