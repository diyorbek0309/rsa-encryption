import "./App.css";
import { Tab, Tabs } from "react-bootstrap";
import RSAForm from "./Form";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Tabs id="controlled-tab-example" className="mb-3">
        <Tab eventKey="encrypt" title="Shifrlash">
          <RSAForm type="encrypt" />
        </Tab>
        <Tab eventKey="decrypt" title="Deshifrlash">
          <RSAForm />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
