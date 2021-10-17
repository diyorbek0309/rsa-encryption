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
  message: Yup.string().required("Xabar kiritilishi shart!"),
});

export const DecryptSchema = Yup.object().shape({
  d: Yup.number()
    .required("d kiritilishi shart!")
    .positive("Musbat son kiriting!")
    .integer("Butun son kiriting!"),
  data: Yup.number()
    .required("Natija kiritilishi shart!")
    .positive("Musbat son kiriting!")
    .integer("Butun son kiriting!")
});
