import React, { useEffect, useState } from 'react';
import logo from './resources/icon-user.svg';
import { _getUsers } from '../_DATA';
import { connect } from 'react-redux';
import { login, setUsers, setRedirectPagePath } from "./actions/actions";
import { useHistory } from 'react-router-dom';
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const Registration = (props) => {
  const history = useHistory();
  const [usersData, setUsersData] = useState({});
  const [usersInfo, setUsersInfo] = useState([]);
  const [dropdownButtonTitle, setDropdownButtonTitle] = useState("Users");

  useEffect(() => {    
    _getUsers()
      .then(res => {
        setUsersData(res);
        setUsersInfo(Object.keys(res));
        props.setUsers(res);
      });
  }, [])


  return (
    <div className="col d-flex justify-content-center mt-5">

      <Card className="text-center" style={{ width: '25rem' }}>
        <Card.Header>HI HI</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={logo} style={{ height: '6rem' }} />
          <Card.Title style={{ marginTop: "0.5rem" }}>Please, Select User ^_^ </Card.Title>
          <DropdownButton
            id="dropdown-basic-button"
            title={dropdownButtonTitle}
            onSelect={e => {
              setDropdownButtonTitle(e);
            }}>
            {usersInfo.map(u => <Dropdown.Item href="" key={u} eventKey={u}>{u}</Dropdown.Item>)}
          </DropdownButton>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            variant="primary"
            size="lg"
            style={{ padding: "0.5rem 6rem 0.5rem 6rem" }}
            onClick={(e) => {
              if (dropdownButtonTitle !== "Users") {
                props.login(usersData[dropdownButtonTitle], props.currentPage);
                if(props.redirectPagePath){
                  let rPath = props.redirectPagePath;
                  setRedirectPagePath("");
                  history.push(rPath);
                }
                else{
                  history.push("/");
                }
              }
            }}
          >
            Sign in
          </Button>
        </Card.Footer>
      </Card>

    </div>

  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    currentPage: state.currentPage,
    redirectPagePath: state.redirectPagePath
  }
}
const mapDispatch = dispatch => {
  return {
    login: (user,page) => dispatch(login(user,page)),
    setUsers: (users) => dispatch(setUsers(users)),
    setRedirectPagePath: (path) => dispatch(setRedirectPagePath(path)),    
  }
}
export default connect(mapStateToProps, mapDispatch)(Registration);