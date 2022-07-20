import {
  ArrowRightIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { TextareaAutosize } from "@mui/material";
function Contact() {
  return (
    <section id="contact" className="">
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
                <form action="" className="w-5/12 text-slate-800">
                  <label className="block p-4">
                    <h3 className="text-lg font-bold">Full name</h3>
                    <input
                      type="text"
                      className="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black rounded text-center"
                    />
                  </label>
                  <label className="block p-4">
                    <h3 className="text-lg font-bold">Email address</h3>
                    <input
                      type="email"
                      className="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black rounded text-center"
                    />
                  </label>
                  <label className="block p-4">
                    <h3 className="text-lg font-bold">Message</h3>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      placeholder="Empty"
                      style={{ width: "100%" }}
                    />
                  </label>

                  <div className="inline-flex items-center">
                    <a
                      href="/"
                      className="inline-flex p-4 text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    >
                      Send Message
                      <i className="ml-1">
                        <ArrowRightIcon className="w-5 h-5 text-blue-500" />
                      </i>
                    </a>
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
