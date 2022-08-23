import { useState, useMemo } from "react";
import OverlayContext from "./utils/Context/OverlayContext";

function App({ children }) { 
  const [isOverlay, setOverlay] = useState(false);

  const passedValue = useMemo(() => {
    return {
      isOverlay,
      setOverlay
    }
  }, [isOverlay]);

  return (
      <OverlayContext.Provider value={passedValue}>
        <div className="App" style={{ position: 'relative' }}>    
          {children}
        </div>
      </OverlayContext.Provider>
  );
}

export default App;
