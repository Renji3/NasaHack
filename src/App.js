import { useEffect, useState } from 'react';
import './scss/App.scss';
import BabylonCanvas from './BabylonCanvas';
import TimeSettingsContainer from './reactComponents/TimeSettingsContainer';
import("@babylonjs/core/Debug/debugLayer")
import('@babylonjs/inspector')


function App() {
  let [ scene, setScene ] = useState(null)

  return (
    <div className="App">
      <BabylonCanvas onSceneReady={setScene}/>
      {scene && <TimeSettingsContainer scene={scene} />}
    </div>
  );
}

export default App;
