import { Formik, Form, Field, ErrorMessage } from "formik";
import { encrypt, decrypt } from "./functions";
import { EncryptSchema, DecryptSchema } from "./RSASchema";
import { calculatorE } from "../Utilities";
import { useRef, useState } from "react";
import classes from "./RSA.module.css";

const RSAForm = ({ type }) => {
  const [possibleE, setPossibleE] = useState();
  /* eslint-disable */
  const [p, setP] = useState("");
  const [q, setQ] = useState("");
  /* eslint-enable */
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
    setResult_e(encrypt(p, q, e, message));
  };

  const onSubmitDecrypt = ({ d, n, data }) => {
    setResult_d(decrypt(d, n, data));
  };

  let result =
    type === "encrypt" ? (
      <div className={classes.result}>
        <h2>Shifrlash natijasi:</h2>
        <h3>
          <i>{result_e.encrypted && result_e.encrypted.join(", ")}</i>
        </h3>
        <h3>
          <i>d = {result_e.d}</i>
        </h3>
        <h3>
          <i>n = {result_e.n}</i>
        </h3>
      </div>
    ) : (
      <div className={classes.result}>
        <h2>Deshifrlash natijasi:</h2>
        <h3>
          <i>{result_d}</i>
        </h3>
      </div>
    );

  return (
    <>
      {type === "encrypt" ? (
        <div className={classes.encrypt__wrap}>
          <h2>RSA algoritmi yordamida shifrlash</h2>
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
            <Form className={classes.encrypt__form}>
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
        <div className={classes.encrypt__wrap}>
          <h2>RSA algoritmi yordamida deshifrlash</h2>
          <Formik
            initialValues={{
              d: "",
              n: "",
              data: "",
            }}
            validationSchema={DecryptSchema}
            onSubmit={(values) => onSubmitDecrypt(values)}
            innerRef={formRef}
          >
            <Form className={classes.encrypt__form}>
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
                n ni kiriting:
                <Field
                  name="n"
                  placeholder="n ning qiymati"
                  type="number"
                  onKeyUp={(e) => handleInput(e)}
                />
              </label>
              <div>
                <ErrorMessage name="n" />
              </div>
              <label>
                Shifrlash natijasini kiriting:
                <Field
                  name="data"
                  placeholder="Natija"
                  as="textarea"
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
