import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { _saveQuestionAnswer, _getUsers, _getQuestions } from '../../_DATA';
import React, { useEffect, useState } from 'react';
import { Form, Card, ProgressBar, Col, Row } from 'react-bootstrap';
import { login, setUsers, setQuestions } from "../actions/actions";

const ViewQuestion = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [checkValue, setCheckValue] = useState("");

  useEffect(() => {
    if (!props.user) {
      history.
        push("/log");
    }
    else
    {setCheckValue(props.user.answers[id]);}

  }, [props.user])

  const drowResults = (optionOneVotes, optionTwoVotes, users) => {
    // let optionOneVotesPercentage = optionOneVotes.length / Object.keys(users).length * 100;
    // let optionTwoVotesPercentage = optionTwoVotes.length / Object.keys(users).length * 100;

    let totalOptionsVote = optionOneVotes.length +optionTwoVotes.length;
    let optionOneVotesPercentage = optionOneVotes.length / totalOptionsVote * 100;
    let optionTwoVotesPercentage = optionTwoVotes.length / totalOptionsVote * 100;

    debugger;
    return (
      <Col sm={10}>
        <Form.Check
          type="radio"
          label={props.questions[id].optionOne.text}
          name="optionOne"
          id="check"
          checked={checkValue === "optionOne"}
          disabled
        />
        <Form.Label column="sm">{optionOneVotes.length} out of {Object.keys(users).length} votes</Form.Label>
        <ProgressBar animated now={optionOneVotesPercentage.toFixed(3)} label={`${optionOneVotesPercentage.toFixed(3)}%`}/>
        
        <Form.Check
          type="radio"
          label={props.questions[id].optionTwo.text}
          name="optionTwo"
          id="check"
          checked={checkValue === "optionTwo"}
          disabled
        />
        <Form.Label column="sm">{optionTwoVotes.length} out of {Object.keys(users).length} votes</Form.Label>
        <ProgressBar animated now={optionTwoVotesPercentage.toFixed(3)} label={`${optionTwoVotesPercentage.toFixed(3)}%`}/>

      </Col>

    )
  }


  return (
    <div className="col d-flex justify-content-center mt-5" style={{ width: "100%" }}>
      {id && props.questions && <Card style={{ width: "50%" }}>
        <Card.Header>{props.users[props.questions[id].author].name}</Card.Header>
        <Row>
          <Col sm={2}>
            <Card.Img variant="top" src={props.users[props.questions[id].author].avatarURL} className="cardImg" />
          </Col>
          <Col sm={10}>
            <Card.Body>
              <Card.Title> Would you rather .... </Card.Title>
              
              <Form.Group as={Row} className="mb-3">
                {drowResults(props.questions[id].optionOne.votes, props.questions[id].optionTwo.votes, props.users)}

              </Form.Group>


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
export default connect(mapStateToProps, mapDispatch)(ViewQuestion);