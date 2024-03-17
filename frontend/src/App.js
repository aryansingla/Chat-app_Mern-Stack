import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPages from './Pages/ChatPages';
function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/chats" component={ChatPages}/>
      {/* <Route path="/chats"/> */}
    </div>
  );
}

export default App;
