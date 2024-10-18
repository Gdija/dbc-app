// import "./App.css";
import BusCardTest from "./BusCardTest";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">    
      <MantineProvider>
        <BusCardTest />
      </MantineProvider>    

    </div> 
  );
}

export default App;
