import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import BalanceScreen from './pages/BalanceScreen';
import HomeScreen from './pages/HomeScreen';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div style={{
          marginLeft: 46
        }}>
          <Switch>
            <Route path="/home" exact component={HomeScreen} />
            <Route path="/" component={BalanceScreen} />
          </Switch>
        </div>
      </Router>
      <GlobalStyles />
    </>
  )
}

export default App;
