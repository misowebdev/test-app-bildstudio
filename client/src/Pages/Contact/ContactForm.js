import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import Subtitle from "../../components/UI/Subtitle";
import Spinner from "../../components/UI/Spinner";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormStatusMessage from "./FormStatusMessage";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  message: Yup.string()
    .max(1000, "The text may not be longer than 1000 characters")
    .required("Required"),
});

function ContactForm({ onSubmit, status }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formic = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const token = await executeRecaptcha("contactForm");
      onSubmit({ values, token });
    },
  });

  if (status === "success" || status === "error") {
    return <FormStatusMessage status={status} />;
  }

  return (
    <>
      <Subtitle subtitle="CONTACT FORM" />
      <Typography variant="body2" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.
      </Typography>

      <form onSubmit={formic.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Name"
          size="small"
          sx={{ mb: 2, maxWidth: 350 }}
          {...formic.getFieldProps("name")}
          error={formic.touched.name && !!formic.errors.name}
          helperText={formic.touched.name && formic.errors.name}
        />
        <TextField
          required
          fullWidth
          type="email"
          label="Email Address"
          size="small"
          sx={{ mb: 2, maxWidth: 350 }}
          {...formic.getFieldProps("email")}
          error={formic.touched.email && !!formic.errors.email}
          helperText={formic.touched.email && formic.errors.email}
        />
        <TextField
          fullWidth
          label="Subject"
          size="small"
          sx={{ mb: 2, maxWidth: 350 }}
          {...formic.getFieldProps("subject")}
          error={formic.touched.subject && !!formic.errors.subject}
          helperText={formic.touched.subject && formic.errors.subject}
        />
        <TextField
          required
          fullWidth
          multiline
          rows={8}
          label="Message"
          size="small"
          sx={{ mb: 2 }}
          {...formic.getFieldProps("message")}
          error={formic.touched.message && !!formic.errors.message}
          helperText={formic.touched.message && formic.errors.message}
        />
        {status === "loading" ? (
          <Spinner />
        ) : (
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "text.light" }}
          >
            SEND MESSAGE
          </Button>
        )}
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.oneOf(["idle", "loading", "error", "success"]).isRequired,
};

export default ContactForm;
