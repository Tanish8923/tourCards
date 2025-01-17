import { useState} from 'react';
import Tours from './components/Tours';
import data from './Data';

function App() {
   
  const [tours , setTours] = useState(data);

  function removeTourHandler(id){
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className='refresh'>
        <h4>No Tour Left</h4>
        <button className='refreshBtn' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
        <h2 className='title'>All Available Tours</h2>
        <Tours tours={tours} removeTourHandler={removeTourHandler}/>
    </div>
  );
}

export default App;
