import React from 'react';
import Bomb from './state-drills/Bomb.js';
import StateDrills from './state-drills/StateDrills.js';
import RouletteGun from './state-drills/RouletteGun.js';
import Tabs from './state-drills/Tabs.js';
import tabs from './state-drills/tabsContent.js';

function App() {
  return (
    <main className='App'>
      <Tabs tabs={tabs} />
    </main>
  );
}

export default App;