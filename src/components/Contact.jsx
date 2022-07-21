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
    <section id="contact" className="">
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
              Thank you for a message, you will receive response within 3
              business days.
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="w-3/4 px-5 py-5 m-auto">
        <div className="flex flex-wrap m-auto">
          <div className="w-full">
            <div className="p-12 text-center">
              <h2 className="block mb-5 text-6xl font-bold leading-none tracking-wide">
                Contact
              </h2>
              <p className="text-lg tracking-wide my-9">Get in touch</p>

              <div className="flex w-full columns-2 place-content-between">
                <div className="text-start">
                  <div className="flex p-4">
                    <i className="self-center text-[cornflowerblue]">
                      <PhoneIcon className="w-5 h-5 text-blue-500 mr-2.5" />
                    </i>
                    <div className="">
                      <h3 className="text-lg font-bold">Call me</h3>
                      <span>+48 502 036 094</span>
                    </div>
                  </div>
                  <div className="flex p-4">
                    <i className="self-center text-[cornflowerblue]">
                      <MailIcon className="w-5 h-5 text-blue-500 mr-2.5" />
                    </i>
                    <div className="">
                      <h3 className="text-lg font-bold">E-mail</h3>
                      <span>
                        <a href="mailto:marcin.kepno@gmail.com">
                          marcin.kepno@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex p-4">
                    <i className="self-center text-[cornflowerblue]">
                      <LocationMarkerIcon className="w-5 h-5 text-blue-500 mr-2.5" />
                    </i>
                    <div className="">
                      <h3 className="text-lg font-bold">Location</h3>
                      <span>Poland - Wrocław</span>
                    </div>
                  </div>
                </div>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-5/12 text-slate-800"
                >
                  <label className="block p-4">
                    <h3 className="text-lg font-bold text-white">Full name</h3>
                    <input
                      type="text"
                      name="user_name"
                      required={true}
                      alt="Full name"
                      className="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black rounded text-center"
                    />
                  </label>
                  <label className="block p-4">
                    <h3 className="text-lg font-bold text-white">
                      Email address
                    </h3>
                    <input
                      type="email"
                      name="user_email"
                      required={true}
                      alt="Email address"
                      className="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black rounded text-center"
                    />
                  </label>
                  <label className="block p-4">
                    <h3 className="text-lg font-bold text-white">Message</h3>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="Empty"
                      style={{ width: "100%" }}
                      name="message"
                      required={true}
                      maxLength="1000"
                    />
                  </label>

                  <div className="inline-flex items-center">
                    <button
                      type="submit"
                      value="Send"
                      className="inline-flex p-4 text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    >
                      Send Message
                      <i className="ml-1">
                        <ArrowRightIcon className="w-5 h-5 text-blue-500" />
                      </i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
