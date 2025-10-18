export default function Home() {
  return (
    <main>
      <header className="navbar" role="banner">
        <div className="container">
          <h1 className="logo">Delight Caterers</h1>
          <nav aria-label="Primary" className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h2 id="hero-heading">Professional Catering for Every Occasion</h2>
            <p className="lead">
              Delight Caterers delivers tailored culinary experiences backed by
              event-planning expertise and intelligent logistics. From intimate
              gatherings to large-scale corporate events, we handle menu,
              staffing, and on-site coordination so you can focus on your
              guests.
            </p>
            <div className="hero-ctas">
              <a className="btn primary" href="#contact">Request a Quote</a>
              <a className="btn outline" href="#menu">View Menu</a>
            </div>
          </div>
          <div className="hero-image" aria-hidden>
            <img src="/hero-catering.jpg" alt="Elegant catered event with plated service" />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="muted">Comprehensive solutions to make your event flawless.</p>
          <div className="service-grid">
            <div className="service">
              <h3>Event Planning & Coordination</h3>
              <p>Full-service planning, timeline management, and on-site staff.</p>
            </div>
            <div className="service">
              <h3>Custom Menus</h3>
              <p>Seasonal ingredients and menu design for dietary needs and
                 guest preferences.</p>
            </div>
            <div className="service">
              <h3>Corporate Catering</h3>
              <p>Seamless delivery and setup for conferences, meetings, and
                 large-scale lunches.</p>
            </div>
            <div className="service">
              <h3>Weddings & Private Events</h3>
              <p>Personalized menus, tasting sessions, and polished service teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container">
          <h2>Featured Menus</h2>
          <p className="muted">Sample menus curated for popular event styles.</p>
          <div className="menu-items">
            <article className="item">
              <img src="https://images.unsplash.com/photo-1604909052950-250c0b3d5b7a" alt="Indian Feast" />
              <h3>Indian Feast</h3>
              <p>Classic regional specialties with modern presentation.</p>
            </article>
            <article className="item">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Continental Delight" />
              <h3>Continental Delight</h3>
              <p>Refined continental dishes for formal events and receptions.</p>
            </article>
            <article className="item">
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="Dessert Heaven" />
              <h3>Dessert Selection</h3>
              <p>Decadent desserts and plated desserts for memorable finales.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-inner">
          <div>
            <h2>Get in Touch</h2>
            <p className="muted">Tell us about your event and we'll provide a tailored proposal.</p>
            <ul className="contact-list">
              <li><strong>Email:</strong> <a href="mailto:contact@delightcaterers.com">contact@delightcaterers.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
            </ul>
          </div>
          <form className="contact-form" action="#" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Event details</label>
            <textarea id="message" name="message" rows={4} placeholder="Date, headcount, preferred menu, location" required />

            <div className="form-actions">
              <button type="submit" className="btn primary">Request Proposal</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Delight Caterers — Trusted catering & event services.</p>
        </div>
      </footer>
    </main>
  );
}
