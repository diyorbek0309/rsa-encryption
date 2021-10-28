import "./App.css";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import RSAContainer from "./rsa/RSAContainer";

function App() {
  return (
    <div className="App">
      <Tabs id="controlled-tab-example" className="mb-3">
        <Tab eventKey="rsa" title="RSA">
          <RSAContainer />
        </Tab>
        <Tab eventKey="decrypt" title="Deshifrlash"></Tab>
      </Tabs>
    </div>
  );
}

export default App;
