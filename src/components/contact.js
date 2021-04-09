import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import styles from './contact.module.css';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xpnozkpx");
  if (state.succeeded) {
      return (<div className={styles.contactUsResponse} id="contact-us"><p>Thanks for your question! We'll get back to you shortly.</p></div>);
  }
  return (

    <div className={styles.contactUsBackground} id="contact-us">
        <div className={`${styles.contactContainer} container`}>
            <div className={styles.contactSideBySide}>
                <div className={styles.contactMainPart}>
                    <h3 className={styles.contactTitle}>Tell Us How We Can Help</h3>
                    <div className={styles.contactLimitContainer}>
                        <p className={styles.contactDetails}>
                        IntelAGENT is expressly built for physicians like you. Your feedback consistently helps us 
                        make the app better.
                        </p>
                    </div>

                    <div className={styles.contactRow}>
                        <div className={styles.contactGrid}>
                            <h5 className={styles.contactSubTitle}>Feel like talking?</h5>
                            <a href="tel:(647)812-6678">(647)812-6678</a>


                            <h5 className={styles.contactSubTitle}>Questions?</h5>
                            <a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#097;&#100;&#097;&#109;&#064;&#105;&#110;&#116;&#101;&#108;&#097;&#103;&#101;&#110;&#116;&#046;&#099;&#097;?&#115;&#117;&#098;&#106;&#101;&#099;&#116;=&#081;&#117;&#101;&#115;&#116;&#105;&#111;&#110;&#032;&#097;&#098;&#111;&#117;&#116;&#032;&#073;&#110;&#116;&#101;&#108;&#065;&#071;&#069;&#078;&#084;" target="_blank">Email Us</a>
                        </div>

                        <div className={styles.contactGrid}>                                                     
                                <form onSubmit={handleSubmit}>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input className={styles.messageInput}
                                    id="name"
                                    type="name" 
                                    name="name"
                                />
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input className={styles.messageInput}
                                    id="email"
                                    type="email" 
                                    name="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea className={styles.messageInput}
                                    id="message"
                                    name="message"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                                <ReCAPTCHA
                                sitekey="6LfkQpQaAAAAABK0j4xctiJK6jXq7wY5xQ_kY5zZ"
                                />
                                <button type="submit" disabled={state.submitting}>
                                    Submit
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
}
 