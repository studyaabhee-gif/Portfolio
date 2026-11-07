import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { links, profile } from '../../data/profile';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await emailjs.send(
        'service_m6r29e8',
        'template_qovcriv',
        { ...data, to_email: profile.email },
        '9-pjF8yDJMKh5GWBX',
      );
      setStatus('sent');
      reset();
    } catch {
      setStatus('failed');
    }
  };

  return (
    <section className="section section--alt" id="contact">
      <div className="container contact">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2>Have a backend to build?</h2>
          <p className="section-head__lead">
            Tell me about your project, role or research. The form goes straight to my inbox.
          </p>
          <ul className="contact__list">
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FiGithub aria-hidden="true" />
              <a href={links.github} target="_blank" rel="noreferrer">
                github.com/studyaabhee-gif
              </a>
            </li>
            <li>
              <FiLinkedin aria-hidden="true" />
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>

        <form className="form reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', { required: 'Please enter your name.' })}
            />
            {errors.name && <p role="alert">{errors.name.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', {
                required: 'Please enter your email.',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'That email address looks incomplete.' },
              })}
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', { required: 'Please add a message.' })}
            />
            {errors.message && <p role="alert">{errors.message.message}</p>}
          </div>
          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            <FiSend aria-hidden="true" /> {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
          <div aria-live="polite">
            {status === 'sent' && <p className="form__status form__status--ok">Thanks, your message is on its way.</p>}
            {status === 'failed' && (
              <p className="form__status form__status--bad">
                That didn&apos;t send. Please email me at {profile.email} instead.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
