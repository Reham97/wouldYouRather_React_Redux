import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { changeCurrentPage } from '../actions/actions';
import {sortQuestions} from "../helper";

const UnAnsweredQ = (props) => {
  const history = useHistory();

  return (
    <div>

      <Row xs={1} md={2} className="g-4 m-2 test">
        {props.questions && sortQuestions(props.questions).map(q => {
          if (props.user.answers && !props.user.answers[q.id]) {
            return (
              <Col className="mt-4">
                <Card>
                  <Row>
                    <Col sm={2}>
                      <Card.Img variant="top" src={props.users && props.users[props.questions[q.id].author].avatarURL} className="cardImg" />
                    </Col>
                    <Col sm={10}>
                      <Card.Body className="ml-3">
                        <Card.Title>Would you rather</Card.Title>
                        <Card.Text>
                          ...{props.questions[q.id].optionOne.text.substring(0, 5)}...
                        </Card.Text>
                        <Button 
                        variant="outline-secondary" 
                        onClick={()=> {
                          history.push("/questions/"+q.id)
                          props.changeCurrentPage("questions")
                          }}>View Pull</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            )
          }
          else {
            return <></>
          }


        })}
      </Row>

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
    changeCurrentPage: (page) => dispatch(changeCurrentPage(page))
  }
}
export default connect(mapStateToProps, mapDispatch)(UnAnsweredQ);