import { Formik, Form, Field, ErrorMessage } from "formik";
import { encode, decode } from "./functions";
import { EncryptSchema, DecryptSchema } from "./Schema";
import { calculatorE } from "./Utilities";
import { useRef, useState } from "react";

const RSAForm = ({ type }) => {
  const [possibleE, setPossibleE] = useState();
  const [p, setP] = useState("");
  const [q, setQ] = useState("");
  const [result_e, setResult_e] = useState("");
  const [result_d, setResult_d] = useState("");

  const formRef = useRef();

  const handleInput = (e) => {
    setP(e.target.value);
    setQ(e.target.value);
  };

  const showE = () => {
    const { p, q } = formRef.current.values;
    setPossibleE(calculatorE(p, q));
  };

  const onSubmitEncrypt = ({ p, q, e, message }) => {
    console.log(p, q, e, message);
    setResult_e(encode(p, q, e, 2, message));
  };

  let result =
    type === "encrypt" ? (
      <div>
        <h2>Shifrlash natijasi:</h2>
        <p>{result_e}</p>
      </div>
    ) : (
      <div>
        <h2>Deshifrlash natijasi:</h2>
        <p>{result_d}</p>
      </div>
    );

  return (
    <>
      {type === "encrypt" ? (
        <div>
          <h1>RSA algoritmi yordamida shifrlash</h1>
          <Formik
            initialValues={{
              p: "",
              q: "",
              e: "",
              message: "",
            }}
            validationSchema={EncryptSchema}
            onSubmit={(values) => onSubmitEncrypt(values)}
            innerRef={formRef}
          >
            <Form>
              <label>
                p ni kiriting:
                <Field
                  name="p"
                  placeholder="p ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
                <ErrorMessage name="p" />
              </label>
              <label>
                q ni kiriting:
                <Field
                  name="q"
                  placeholder="q ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
                <ErrorMessage name="q" />
              </label>
              <label>
                e ning qiymatlaridan birini tanlang:{" "}
                {possibleE && possibleE.join(", ")}
                <Field
                  name="e"
                  placeholder="e ning qiymati"
                  type="number"
                  onFocus={showE}
                />
                <ErrorMessage name="e" />
              </label>
              <label>
                Shifrlash uchun xabar kiriting
                <Field name="message" placeholder="Xabar" as="textarea" />
                <ErrorMessage name="message" />
              </label>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      ) : (
        <div>
          <h1>RSA algoritmi yordamida deshifrlash</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={DecryptSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Field name="name" />
              <ErrorMessage name="name" />
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
      {result}
    </>
  );
};

export default RSAForm;
