import './App.css';
import Users from './components/User';
import Post from './components/Post';
import CounterHook from './components/CounterHook';
import LoginForm from './components/LoginForm';
import Userchangetask5 from './components/Userchangetask5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 3 day 11 task- HTTP methods</h1>
      </header>
      <Users/>
      <header className="App-header">
        <h1>Week 3 day 12 task</h1>
      </header>
      <Post/>
      <header className="App-header">
        <h1>Week 3 day 13 task</h1>
      </header>
      <CounterHook/>
      <header className="App-header">
        <h1>Week 3 day 14 task</h1>
      </header>
      <LoginForm/>
      <header className="App-header">
        <h1>Week 3 day 15 task</h1>
      </header>
      <Userchangetask5/>
    </div>
  );
}

export default App;
