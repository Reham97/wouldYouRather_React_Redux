import React, { useEffect, useState } from 'react';
import AnsweredQ from './answeredQ';
import { connect } from 'react-redux';
import UnAnsweredQ from './unAnsweredQ';
import { Tabs, Tab } from 'react-bootstrap';
import { _getQuestions } from '../../_DATA';
import { useHistory } from 'react-router-dom';
import { setQuestions } from "../actions/actions";

const Home = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!props.user) {
      history.push("/log");
    }

    _getQuestions()
      .then(res => {
        props.setQuestions(res);
      });

  }, [props.user])

  return (
    <div className="tabsContainer">
      <Tabs defaultActiveKey="unAnsweredQ" id="uncontrolled-tab-example" className="mb-6" fill>
        <Tab eventKey="unAnsweredQ" title="Unanswered Questions">
          <UnAnsweredQ />
        </Tab>
        <Tab eventKey="answeredQ" title="Answered Questions">
          <AnsweredQ />
        </Tab>
      </Tabs>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    questions:state.questions
  }
}
const mapDispatch = dispatch => {
  return {
    setQuestions: (questions)=>dispatch(setQuestions(questions))
  }
}
export default connect(mapStateToProps, mapDispatch)(Home)