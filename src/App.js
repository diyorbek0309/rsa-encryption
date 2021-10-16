import "./App.css";
import { Tab, Tabs } from "react-bootstrap";
import Decrypt from "./Decrypt";
import Encrypt from "./Encrypt";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Tabs id="controlled-tab-example" className="mb-3">
        <Tab eventKey="encrypt" title="Shifrlash">
          <Encrypt />
        </Tab>
        <Tab eventKey="decrypt" title="Deshifrlash">
          <Decrypt />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
