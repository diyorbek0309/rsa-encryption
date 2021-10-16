import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EncryptSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const DecryptSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RSAForm = (type) => {
  return (
    <>
      {type === "encrypt" ? (
        <div>
          <h1>Signup</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={EncryptSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <ErrorMessage name="name" />
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          <h1>Signup</h1>
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
            {({ errors, touched }) => (
              <Form>
                <Field name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <ErrorMessage name="name" />
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default RSAForm;
