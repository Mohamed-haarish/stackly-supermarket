
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Stackly Mart</h2>
          <p>
            Fresh groceries, quality products and
            everyday essentials delivered to your door.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-links">
          <h3>Contact Us</h3>
          <p>Email: support@stacklymart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

        <div className="footer-links">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Stackly Mart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
