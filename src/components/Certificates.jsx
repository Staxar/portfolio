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
import certificate_10 from "../assets/img/webp/certificates/Excel Certiport.webp";
import certificate_11 from "../assets/img/webp/certificates/Google.webp";
import Paper from "@mui/material/Paper";

function Certificates() {
  const certificates = [
    {
      id: 0,
      certificateby: "University of Michigan",
      src: certificate_1,
      alt: "JavaScript, jQuery and JSON",
    },
    {
      id: 1,
      certificateby: "University of Michigan",
      src: certificate_2,
      alt: "Building Web Applications in PHP",
    },
    {
      id: 2,
      certificateby: "University of Michigan",
      src: certificate_3,
      alt: "Programming for Everybody (Getting Started with)",
    },
    {
      id: 3,
      certificateby: "DeepLearning.AI",
      src: certificate_4,
      alt: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning",
    },
    {
      id: 4,
      certificateby: "University of Michigan",
      src: certificate_5,
      alt: "Introduction to Structured Query Language (SQL)",
    },
    {
      id: 5,
      certificateby: "coursera project network",
      src: certificate_6,
      alt: "Building a Dynamic Web App using PHP  MySQL",
    },
    {
      id: 6,
      certificateby: "DeepLearning.AI",
      src: certificate_7,
      alt: "Convolutional Neural Networks in TensorFlow",
    },
    {
      id: 7,
      certificateby: "University of Michigan",
      src: certificate_8,
      alt: "Web Application for Everybody",
    },
    {
      id: 8,
      certificateby: "University of Michigan",
      src: certificate_9,
      alt: "Building Database Applications in PHP",
    },
    {
      certificateby: "CERTIPORT SUS2.0 ECDL",
      src: certificate_10,
      alt: "MS EXCEL - Advanced Level",
    },
    {
      id: 10,
      certificateby: "Google Open University",
      src: certificate_11,
      alt: "The Fundamental of Digital Marketing",
    },
  ];
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section__title">Certificates</h2>
        <p className="section__subtitle">My certificates</p>
        <div className="grid certificates__grid">
          {certificates.map((certificate, index) => {
            return (
              <Paper className="certificates__paper">
                <div className="certificates__item">
                  <p className="certificates__subtitle">{certificate.alt}</p>

                  <ModalImage
                    key={certificate.id}
                    small={certificate.src}
                    large={certificate.src}
                    alt={certificate.alt}
                  />
                </div>
                <p className="certificates__certificateby">
                  {certificate.certificateby}
                </p>
              </Paper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
