import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Required by Web3Forms (public key)
    formData.append(
      "access_key",
      "1d4fda6e-08a4-4098-8760-2a1371e96dfe"
    );

    // Optional niceties
    if (!formData.has("subject")) {
      formData.append("subject", "New message from your website");
    }
    if (!formData.has("from_name")) {
      formData.append("from_name", "Portfolio Contact Form");
    }
    if (!formData.has("botcheck")) {
      formData.append("botcheck", "");
    }

    try {
      const json = JSON.stringify(Object.fromEntries(formData));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((r) => r.json());

      if (res.success) {
        setStatus("success");
        setMessage("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(res.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form onSubmit={onSubmit} noValidate>
        {/* Honeypot (spam trap) */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            rows={5}
          />
        </div>

        {/* Optional: redirect after success */}
        {/* <input type="hidden" name="redirect" value="https://your-site.com/thanks" /> */}

        <input
          className="hover btn"
          type="submit"
          value={status === "submitting" ? "Sending..." : "Submit"}
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        />
      </form>

      {status === "success" && (
        <p role="status" style={{ marginTop: 12 }}>
          {message}
        </p>
      )}
      {status === "error" && (
        <p role="alert" style={{ marginTop: 12 }}>
          {message}
        </p>
      )}
    </section>
  );
}

export default Contact;
