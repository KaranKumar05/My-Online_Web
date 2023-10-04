import * as Icon from "react-bootstrap-icons";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="about">
        <span>
          <h2>Welcome to Alpha's Store</h2>
          <p>
            At Alpha's Store, we believe that shopping should be more than just
            a transaction; it should be an experience filled with joy,
            inspiration, and convenience. We are not just an online store; we
            are a destination where your shopping dreams come to life.
          </p>
        </span>
        <span>
          <h2>Our Story</h2>
          <p>
            Alpha's Store was born out of a passion for quality, style, and
            innovation. Founded by a group of enthusiasts who are dedicated to
            making your online shopping experience delightful and hassle-free,
            we have been on a mission to curate a collection of products that
            exceed your expectations.
          </p>
        </span>
        <span>
          <h2>Thank You</h2>
          <p>
            Thank you for choosing [Your Store Name] as your go-to online
            shopping destination. Your trust in us is what inspires us every day
            to deliver excellence in everything we do.
          </p>
        </span>
      </div>
      <div className="links">
        <span>
          <Icon.Linkedin />
        </span>
        <span>
          <Icon.Facebook />
        </span>
        <span>
          <Icon.Instagram />
        </span>
        <span>
          <Icon.Envelope />
        </span>
      </div>
      <p>All Right Reserved by <strong>Karan Kumar</strong></p>
    </div>
  );
};

export default Footer;
