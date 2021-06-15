import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Home from './components/pages/home';
import store from './components/store/index';
import Registration from './components/login';
import Error404 from './components/pages/error404';
import LeaderBoard from './components/pages/leaderBoard';
import ViewQuestion from './components/pages/viewQuestion';
import ViewQuestionToAnswer from './components/pages/viewQuestionToAnswer';
import CreateQuestion from './components/pages/createQuestion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/leaderBoard">
        <LeaderBoard />
      </Route>
      <Route exact path="/add">
        <CreateQuestion />
      </Route>
      <Route exact path="/log">
        <Registration />
      </Route>
      <Route path="/questions/:id?">
        <ViewQuestionToAnswer />
      </Route>
      <Route path="/viewQuestion/:id?">
        <ViewQuestion />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/">
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
