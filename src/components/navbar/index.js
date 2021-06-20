import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout, changeCurrentPage, setQuestions, setUsers, getUsers, getQuestions } from '../actions/actions';
import { connect } from 'react-redux';
import { Navbar, Button, Form, Nav } from 'react-bootstrap';

const NavBar = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.getUsers();
        props.getQuestions();
    }, [])

    const renderList = () => {
        if (props.user) {
            return [
                <Form className="d-flex">
                    <Navbar.Text style={{ color: "white" }} >
                        Hi, {props.user.name}
                    </Navbar.Text>
                    <img variant="top" src={props.user.avatarURL} style={{ height: '2rem', margin: "0.5rem 0.5rem 0rem 0.5rem " }} />
                    <Button
                        variant="primary"
                        onClick={e => {
                            e.preventDefault();
                            props.logout();
                            props.getUsers();
                            props.getQuestions();
                            history.push("/log");
                        }}
                    >Log out</Button>{' '}
                </Form>
            ]
        }
    }


    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    key="nav-bar"
                >
                    <Nav.Link key="home">
                        <NavLink key="home" to="/" className={props.currentPage === "home" && `activeTab`} onClick={() => { props.changeCurrentPage("home") }}>
                            Home</NavLink>
                    </Nav.Link>
                    <Nav.Link key="newQuestions">
                        <NavLink key="newQuestions" to="/add" className={props.currentPage === "newQuestions" && `activeTab`} onClick={() => { props.changeCurrentPage("newQuestions") }}>
                            New Question</NavLink>
                    </Nav.Link>
                    <Nav.Link key="leaderBoard">
                        <NavLink key="leaderBoard" to="/leaderBoard" className={props.currentPage === "leaderBoard" && `activeTab`} onClick={() => { props.changeCurrentPage("leaderBoard") }}>
                            Leader Board</NavLink>
                    </Nav.Link>


                </Nav>
            </Navbar.Collapse>

            {renderList()}

        </Navbar>

    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        questions: state.questions,
        currentPage: state.currentPage,
    }
}
const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout()),
        changeCurrentPage: (page) => dispatch(changeCurrentPage(page)),
        setQuestions: (questions) => dispatch(setQuestions(questions)),
        setUsers: (data) => dispatch(setUsers(data)),
        getUsers: () => getUsers(dispatch),
        getQuestions: () => getQuestions(dispatch),
    }
}
export default connect(mapStateToProps, mapDispatch)(NavBar)