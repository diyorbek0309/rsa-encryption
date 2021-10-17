import { Formik, Form, Field, ErrorMessage } from "formik";
import { encrypt, decrypt } from "./functions";
import { EncryptSchema, DecryptSchema } from "./Schema";
import { calculatorE } from "./Utilities";
import { useRef, useState } from "react";

const RSAForm = ({ type }) => {
  const [possibleE, setPossibleE] = useState();
  const [p, setP] = useState("");
  const [q, setQ] = useState("");
  const [result_e, setResult_e] = useState("");
  const [result_d, setResult_d] = useState("");

  console.log(p, q);

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
    setResult_e(encrypt(p, q, e, message));
  };

  const onSubmitDecrypt = () => {
    setResult_d(decrypt());
  };

  let result =
    type === "encrypt" ? (
      <div>
        <h2>Shifrlash natijasi:</h2>
        <h3>
          <i>{result_e}</i>
        </h3>
      </div>
    ) : (
      <div>
        <h2>Deshifrlash natijasi:</h2>
        <h3>
          <i>{result_d}</i>
        </h3>
      </div>
    );

  return (
    <>
      {type === "encrypt" ? (
        <div className="encrypt__wrap">
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
            <Form className="encrypt__form">
              <label>
                p ni kiriting:
                <Field
                  name="p"
                  placeholder="p ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
              </label>
              <div>
                <ErrorMessage name="p" />
              </div>
              <label>
                q ni kiriting:
                <Field
                  name="q"
                  placeholder="q ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
              </label>
              <div>
                <ErrorMessage name="q" />
              </div>
              <label>
                e ning qiymatlaridan birini tanlang:{" "}
                {possibleE && possibleE.join(", ")}
                <Field
                  name="e"
                  placeholder="e ning qiymati"
                  type="number"
                  onFocus={showE}
                />
              </label>
              <div>
                <ErrorMessage name="e" />
              </div>
              <label>
                Shifrlash uchun xabar kiriting
                <Field name="message" placeholder="Xabar" as="textarea" />
              </label>
              <div>
                <ErrorMessage name="message" />
              </div>
              <button type="submit">Shifrlash</button>
            </Form>
          </Formik>
        </div>
      ) : (
        <div className="encrypt__wrap">
          <h1>RSA algoritmi yordamida deshifrlash</h1>
          <Formik
            initialValues={{
              d: "",
              data: "",
            }}
            validationSchema={DecryptSchema}
            onSubmit={(values) => onSubmitDecrypt(values)}
            innerRef={formRef}
          >
            <Form className="encrypt__form">
              <label>
                d ni kiriting:
                <Field
                  name="d"
                  placeholder="d ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
              </label>
              <div>
                <ErrorMessage name="d" />
              </div>
              <label>
                Shifrlash natijasini kiriting:
                <Field
                  name="data"
                  placeholder="Natija"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
              </label>
              <div>
                <ErrorMessage name="data" />
              </div>
              <button type="submit">Deshifrlash</button>
            </Form>
          </Formik>
        </div>
      )}
      {result}
    </>
  );
};

export default RSAForm;
