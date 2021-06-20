import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';
import { changeCurrentPage, saveQuestion } from '../actions/actions';

const CreateQuestion = (props) => {
  const history = useHistory();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  return (
    <div className="col d-flex justify-content-center mt-5" style={{ width: "100%" }}>

      <Card style={{ width: "50%" }}>
        <Card.Header>Create New Question</Card.Header>
        <Card.Body>
          <Card.Text>Complete the Question</Card.Text>
          <Card.Title>Would you rather....</Card.Title>

          <Form.Control 
          size="lg" 
          type="text" 
          placeholder="Option One" 
          value={optionOne && optionOne}
          onChange={(e)=>{setOptionOne(e.target.value)}}
          />

          <div>OR</div>

          <Form.Control 
          size="lg" 
          type="text" 
          placeholder="Option Two" 
          value={optionTwo && optionTwo}
          onChange={(e)=>{setOptionTwo(e.target.value)}}
          />

          <Button 
          variant="primary" 
          className="mt-4"
          onClick={()=>{
            console.log(optionOne,optionTwo)
            if(optionOne && optionTwo && (optionOne !== optionTwo)){
              let question ={
                optionOneText:optionOne,
                optionTwoText:optionTwo,
                author:props.user.id
              }
              debugger;
              props.saveQuestion(question, props.user)
              props.changeCurrentPage("home");
              history.push("/");
              

            }
          }}
          >Submit</Button>

        </Card.Body>
      </Card>

    </div>

  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    changeCurrentPage: (page) => dispatch(changeCurrentPage(page)),
    saveQuestion: (question, user) => saveQuestion(dispatch,question, user),
  }
}
export default connect(mapStateToProps, mapDispatch)(CreateQuestion)


