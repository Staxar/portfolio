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
  const certificates = [
    {
      certificateby: "University of Michigan",
      src: certificate_1,
      alt: "JavaScript, jQuery and JSON",
    },
    {
      certificateby: "University of Michigan",
      src: certificate_2,
      alt: "Building Web Applications in PHP",
    },
    {
      certificateby: "University of Michigan",
      src: certificate_3,
      alt: "Programming for Everybody (Getting Started with)",
    },
    {
      certificateby: "DeepLearning.AI",
      src: certificate_4,
      alt: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning",
    },
    {
      certificateby: "University of Michigan",
      src: certificate_5,
      alt: "Introduction to Structured Query Language (SQL)",
    },
    {
      certificateby: "coursera project network",
      src: certificate_6,
      alt: "Building a Dynamic Web App using PHP  MySQL",
    },
    {
      certificateby: "DeepLearning.AI",
      src: certificate_7,
      alt: "Convolutional Neural Networks in TensorFlow",
    },
    {
      certificateby: "University of Michigan",
      src: certificate_8,
      alt: "Building Web Applications in PHP",
    },
    {
      certificateby: "University of Michigan",
      src: certificate_9,
      alt: "Building Database Applications in PHP",
    },
  ];
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
                {certificates.map((certificate) => {
                  return (
                    <ModalImage
                      small={certificate.src}
                      large={certificate.src}
                      alt={certificate.alt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
