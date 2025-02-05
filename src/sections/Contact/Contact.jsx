import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mbldkjkw" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nom
          </label>
          <input type="text" name="name" id="name" placeholder="Nom" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Carambar
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Envoyer" />
      </form>
    </section>
  );
}

export default Contact;
