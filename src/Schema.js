import * as Yup from "yup";

export const EncryptSchema = Yup.object().shape({
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

export const DecryptSchema = Yup.object().shape({
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
