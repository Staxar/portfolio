import {
  ArrowRightIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { TextareaAutosize } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000 rounded",
    boxShadow: 24,
    p: 4,
    color: "black",
    borderRadius: "1rem",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u9bj4w7",
        "template_qprq4fc",
        form.current,
        "nIhmPFBmop2i99dmb"
      )
      .then(
        (result) => {
          form.current.reset();
          handleOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = createTheme({
    typography: {
      titlemodal: {
        color: "green",
      },
    },
  });
  return (
    <section className="contact section" id="contact">
      <div className="">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ThemeProvider theme={theme}>
              <Typography
                id="modal-modal-title"
                variant="titlemodal"
                component="h2"
              >
                Congratulations!
              </Typography>
            </ThemeProvider>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Thank you htmlFor a message, you will receive response within 3
              business days.
            </Typography>
          </Box>
        </Modal>
      </div>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="container grid contact__container">
        <div>
          <div className="contact__information">
            <PhoneIcon className="contact__icons" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+48 502-036-094</span>
            </div>
          </div>
          <div className="contact__information">
            <MailIcon className="contact__icons" />
            <div>
              <h3 className="contact__title">Email</h3>
              <a href="mailto:marcin.kepno@gmail.com">
                <span className="contact__subtitle">
                  marcin.kepno@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="contact__information">
            <LocationMarkerIcon className="contact__icons" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Poland - Wrocław</span>
            </div>
          </div>
        </div>

        <form
          action=""
          className="grid contact__form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid">
            <div className="contact__content">
              <label htmlFor="user_name" className="contact__label">
                Name
              </label>
              <input
                type="text"
                className="contact__input"
                name="user_name"
                required={true}
                alt="Full name"
                placeholder="Full name"
              ></input>
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Emali
              </label>
              <input
                className="contact__input"
                type="email"
                name="user_email"
                required={true}
                alt="Email address"
                placeholder="Email address"
              ></input>
            </div>
            <div className="contact__content">
              <label htmlFor="project" className="contact__label">
                Project
              </label>
              <input
                type="text"
                className="contact__input"
                name="project"
                alt="project"
                placeholder="Project"
              ></input>
            </div>
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Your message"
                style={{ width: "100%" }}
                name="message"
                required={true}
                maxLength="1000"
                className="contact__input"
              />
            </div>
            <div className="contact__button">
              {" "}
              <button
                type="submit"
                value="Send Message"
                className="button button--flex button--small"
              >
                Send Message
                <i className="contact__icon_button">
                  <ArrowRightIcon />
                </i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
