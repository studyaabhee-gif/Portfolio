import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styled from 'styled-components';
import { useRef } from 'react';

// Styled Components
const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f0f4f8, #e0e7ff);  
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  margin-top: 50px;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
  }

  span {
    color: #dc3545;
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: linear-gradient(to right, #3a86ff, #8338ec);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  svg {
    font-size: 1.5rem;
    color: #3a86ff;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  p {
    color: #6c757d;
  }
`;

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    const templateParams = {
      ...data,
      to_email: 'abheejanlal@gmail.com'
    };

    emailjs.send(
      'service_m6r29e8',
      'template_qovcriv',
      templateParams,
      '9-pjF8yDJMKh5GWBX'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      reset();
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send the message. Please try again later.');
    });
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Get In Touch
        </motion.h2>

        <ContactContainer>
          <ContactForm
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
            as={motion.form}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3>Send a Message</h3>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend />
              Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Contact Information
            </motion.h3>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FiMapPin />
              <div>
                <h4>Address</h4>
                <p>Sanepa, Lalitpur, Nepal</p>
              </div>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+977-9818950958</p>
              </div>
            </ContactItem>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>abheejanlal@gmail.com</p>
              </div>
            </ContactItem>
          </ContactInfo>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}

export default Contact;