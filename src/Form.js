import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { encode, decode } from "./functions";
import { useEffect } from "react";

let possible_e;

const EncryptSchema = Yup.object().shape({
  p: Yup.number()
    .required("p kiritilishi shart!")
    .positive("Musbat son kiriting!")
    .integer("Butun son kiriting!"),
  q: Yup.number()
    .required("q kiritilishi shart!")
    .positive("Musbat son kiriting!")
    .integer("Butun son kiriting!"),
  e: Yup.number()
    .required("e kiritilishi shart!")
    .positive("Musbat son kiriting!")
    .integer("Butun son kiriting!"),
});

const DecryptSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Kiritilishi shart!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MyField = (props) => {
  const {
    values: { p, q },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    if (p !== "" && q !== "" && touched.p && touched.q) {
      setFieldValue(props.name, `textA: ${p}, textB: ${q}`);
    }
  }, [p, q, touched.p, touched.q, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

const RSAForm = ({ type }) => {
  console.log(type);
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
                <MyField name="textC" />
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
