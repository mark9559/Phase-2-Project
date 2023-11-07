import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SneakerList from './components/SneakerList';
import SneakerDetail from './components/SneakerDetail';
import AddSneaker from './components/AddSneaker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sneakers" component={SneakerList} />
          <Route path="/about" component={About} /> {/* New About route */}
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
