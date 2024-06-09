import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container py-5">
        <div className="header text-center">
          <h2>
            CONTACT <span>ME</span>
          </h2>
          <p>If you want to contact with me,Fill up the form and send it</p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-5">
            <div className="card text-center py-4">
              <div className="card-body">
                <h4>Address</h4>
                <p>Dinajpur, Bangladesh</p>
                <h4 className="pt-3">Phone</h4>
                <p>+8801768836443</p>
                <h4 className="pt-3">Email</h4>
                <p>mdmahin.pro@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-md-0 mt-5">
            <form action="https://formspree.io/f/xzbkgrjz" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control p-4"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="form-control p-4"
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  className="form-control p-4"
                  rows="4"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <br />
              <input
                type="submit"
                className="btn btn-block py-2"
                value="SEND"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
