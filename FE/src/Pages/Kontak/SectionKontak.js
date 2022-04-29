import { Container } from "react-bootstrap";

const SectionKontak = () => {
  return (
    <>
      <Container>
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Apakah Anda memiliki pertanyaan? Jangan ragu untuk menghubungi kami
            secara langsung. Tim kami akan kembali kepada Anda dalam hitungan
            jam untuk membantu Anda..
          </p>
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label htmlFor="name" className>
                        Your name
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="email" className>
                        Your email
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject" className>
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
              </form>
              <div className="text-left text-md-left">
                <a
                  href='#!'
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div className="status" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>Tanggamus, Lampung</p>
                </li>
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>+6285816790359</p>
                </li>
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>yudi.14117035@student.itera.ac.id</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </Container>
    </>
  );
};

export default SectionKontak;
