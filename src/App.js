import './App.css';
import Teams from './Teams';
import Elite8 from './Elite8';

function App() {
  const teams = [
    {
      name: 'Saint Peters',
      seed: 15,
      conference: 'MAAC',
      blueBlood: false
    },
    {
      name: 'North Carolina',
      seed: 8,
      conference: 'ACC',
      blueBlood: true
    },
    {
      name: 'Miami',
      seed: 10,
      conference: 'ACC',
      blueBlood: false
    },
    {
      name: 'Kansas',
      seed: 1,
      conference: 'BIG 12',
      blueBlood: true
    },
    {
      name: 'Arkansas',
      seed: 4,
      conference: 'SEC',
      blueBlood: false
    },
    {
      name: 'Duke',
      seed: 2,
      conference: 'ACC',
      blueBlood: true
    },
    {
      name: 'Houston',
      seed: 5,
      conference: 'AAC',
      blueBlood: false
    },
    {
      name: 'Villanova',
      seed: 2,
      conference: 'Big East',
      blueBlood: false
    }
  ]
  return (
    < >
      <div><Teams teams={teams}/></div>
      <div><Elite8 teams={teams}/></div>
    </>
  )
}

export default App
