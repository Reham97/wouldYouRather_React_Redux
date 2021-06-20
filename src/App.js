import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Home from './components/pages/home';
import store from './components/store/index';
import Registration from './components/login';
import Error404 from './components/pages/error404';
import LeaderBoard from './components/pages/leaderBoard';
import QuestionScreen from './components/questionScreen';
import CreateQuestion from './components/pages/createQuestion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/leaderBoard" page="leaderBoard">
        <LeaderBoard />
      </PrivateRoute>
      <PrivateRoute exact path="/add" page="newQuestions">
        <CreateQuestion />
      </PrivateRoute>
      <Route exact path="/log" page="">
        <Registration />
      </Route>     
      <PrivateRoute path="/questions/:id?" page="questions">
        <QuestionScreen />
      </PrivateRoute>
      <PrivateRoute exact path="/" page="home">
        <Home />
      </PrivateRoute>
      <Route path="/error" page="">
        <Error404 />
      </Route>
      <Route path="/" page="">
        <Error404 />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Routing />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
