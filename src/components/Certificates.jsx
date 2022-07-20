import ModalImage from "react-modal-image";
import certificate_1 from "../assets/img/webp/certificates/t1gvt-2930y.webp";
import certificate_2 from "../assets/img/webp/certificates/t5hto-98pw1.webp";
import certificate_3 from "../assets/img/webp/certificates/t75w3-8l0x8.webp";
import certificate_4 from "../assets/img/webp/certificates/tbirl-mw000.webp";
import certificate_5 from "../assets/img/webp/certificates/td9sc-d81ku.webp";
import certificate_6 from "../assets/img/webp/certificates/tg28s-1fhp8.webp";
import certificate_7 from "../assets/img/webp/certificates/tpw2g-6grra.webp";
import certificate_8 from "../assets/img/webp/certificates/tvm66-vuvoc.webp";
import certificate_9 from "../assets/img/webp/certificates/tx8dy-x30x3.webp";

function Certificates() {
  return (
    <section id="contact" className="">
      <div className="w-3/4 px-5 py-5 m-auto">
        <div className="flex flex-wrap m-auto">
          <div className="w-full">
            <div className="p-12 text-center">
              <h2 className="block mb-5 text-6xl font-bold leading-none tracking-wide">
                Certificates
              </h2>
              <div className="grid w-full grid-flow-col grid-rows-3 gap-4">
                <ModalImage
                  small={certificate_1}
                  large={certificate_1}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_2}
                  large={certificate_2}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_3}
                  large={certificate_3}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_4}
                  large={certificate_4}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_5}
                  large={certificate_5}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_6}
                  large={certificate_6}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_7}
                  large={certificate_7}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_8}
                  large={certificate_8}
                  alt="Hello World!"
                />
                <ModalImage
                  small={certificate_9}
                  large={certificate_9}
                  alt="Hello World!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
