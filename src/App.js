import './App.css';
import CountDown from './components/CountDown';
import { Header } from './components/Header';

function App() {
  const user = {
    "name": "Sal Davis",
    "pic": "https://picsum.photos/500/300?random=1"
  }
  const headerComponent = (
    <Header title="Solid" user={user} />
  )
  return (
    <>
      <div className='center-container'>
        {headerComponent}
        <CountDown />
        <h3>Solid React Loading...</h3>
      </div>
    </>
  );
}

export default App;
