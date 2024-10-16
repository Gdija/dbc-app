// import "./App.css";
import BusCard from "./BusCard";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">    
      <MantineProvider>
        <BusCard />
      </MantineProvider>    

    </div> 
  );
}

export default App;
