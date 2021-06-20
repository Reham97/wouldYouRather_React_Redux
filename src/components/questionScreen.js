import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRedirectPagePath } from "./actions/actions";
import { login } from "./actions/actions";
import ViewQuestion from './pages/viewQuestion';
import ViewQuestionToAnswer from './pages/viewQuestionToAnswer';


function QuestionScreen(props) {
  const id = props.redirectPagePath ? props.redirectPagePath.split('/')[2] : null;

  if (id && props.user.answers && props.questions[id]) {
    if (!props.user.answers[id]) {
      return <ViewQuestionToAnswer id={id} />
    }
    else {
      return <ViewQuestion id={id} />
    }
  }
  else {
    return <Redirect to='/error' />
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    questions: state.questions,
    redirectPagePath: state.redirectPagePath
  }
}
const mapDispatch = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatch)(QuestionScreen)

