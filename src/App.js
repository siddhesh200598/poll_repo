import './App.css';
import PollWidget from './components/PollWidget/pollWidget';
import { pollData } from './constant';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Poll</h1>
      <div className='container'>
        <PollWidget data={pollData[0]} />
        <PollWidget data={pollData[1]} />
      </div>
    </div>
  );
}

export default App;
