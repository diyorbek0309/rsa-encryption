import { Formik, Form, Field, ErrorMessage } from "formik"
import { encode, decode } from "./functions";
import { EncryptSchema, DecryptSchema } from "./Schema"

let possible_e;

const RSAForm = ({ type }) => {
  let result_e = encode();
  let result_d = decode();

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
            }}
            validationSchema={EncryptSchema}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <label>
                p ni kiriting:
                <Field name="p" placeholder="p ning qiymati" type="number" />
                <ErrorMessage name="p" />
              </label>
              <label>
                q ni kiriting:
                <Field name="q" placeholder="q ning qiymati" />
                <ErrorMessage name="q" />
              </label>
              <label>
                e ning ushbu qiymatlaridan birini tanlang (`${possible_e}`)
                <Field name="e" placeholder="e ning qiymati" />
                <ErrorMessage name="q" />
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
