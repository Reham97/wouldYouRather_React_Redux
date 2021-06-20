import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { sortByAnswersQuestions } from '../helper';

const LeaderBoard = (props) => {

  return (
    <div className="tabsContainer test">
      {props.users && sortByAnswersQuestions(props.users).map(currentUser => {
        return (
        <Card className="mb-6 mt-2" style={{ width: "90%" }} key={currentUser.id} fill>
          <Row>
            <Col sm={1}>
              <Card.Img variant="top" src={currentUser.avatarURL} className="cardImg" />
            </Col>
            <Col sm={7}>
              <Card.Body className="ml-3">
                <Card.Title>{currentUser.name}</Card.Title>
                <Card.Text> Answered Questions {Object.keys(currentUser.answers).length} </Card.Text>
                <Card.Text> Created Questions  {currentUser.questions.length} </Card.Text>
              </Card.Body>
            </Col>
            <Col sm={4}>
              <Card className="mt-3 mr-5">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Score</ListGroupItem>
                  <ListGroupItem>{Object.keys(currentUser.answers).length + currentUser.questions.length} </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>

        </Card>
        )
      })}


    </div>

  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
  }
}
const mapDispatch = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatch)(LeaderBoard)