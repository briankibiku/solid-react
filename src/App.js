import './App.css';

function App() {
  const user = {
    "name": "Sal Davis",
    "pic": "https://picsum.photos/500/300?random=1"
  }
  const headerComponent = (
    <div>
      <img src={user.pic} height="100" width="100" alt="randomimage" />
    </div>
  )
  return (
    <>
      <div className='center-container'>
        {headerComponent}
        <h3>Solid React Loading...</h3>
      </div>
    </>
  );
}

export default App;
