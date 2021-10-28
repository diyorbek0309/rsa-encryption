import RSAForm from "./RSAForm";
import { useState } from "react";
import { Form } from "react-bootstrap";

const RSAContainer = () => {
  const [type, setType] = useState("");

  const selectHandler = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Form.Select className="w-25" onChange={(e) => selectHandler(e)}>
        <option value="encrypt">Shifrlash</option>
        <option value="decrypt">Deshifrlash</option>
      </Form.Select>
      <RSAForm type={type} />
    </>
  );
};

export default RSAContainer;
