import styled from "styled-components";
import { tablet } from "../styles/breakpoints";
import { useState } from "react";

const FormStyles = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
  @media (min-width: ${tablet}) {
    margin: 3rem 4rem 3rem 5rem;
  }
`;
const SharedInputStyles = `
  border-radius: 2rem;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.5);
  
`;
const InputStyles = styled.input`
  ${SharedInputStyles}
`;
const TextAreaStyles = styled.textarea`
  ${SharedInputStyles}
  resize: none;
  height: 5rem;
`;
const ButtonStyles = styled.button`
  ${SharedInputStyles}
  width: fit-content;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-weight: 700;
  margin-top: 1rem;
  transition: box-shadow 0.5s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.5);
  }
`;
const ErrorMessage = styled.p`
  color: red;
  margin-top: 0;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    if (!name.value || !email.value || !message.value) {
      setShowError(true);
      return;
    } else {
      try {
        const myForm = e.target;
        const formData = new FormData(myForm);
        console.log(formData);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }).then(() => console.log("Form successfully submitted"));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormStyles
      name="Contact Freya"
      data-netlify="true"
      method="post"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name:</label>
      <InputStyles
        type="text"
        name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
      />
      {showError && !values.name ? (
        <ErrorMessage>Name is required!</ErrorMessage>
      ) : null}
      <label htmlFor="email">Email:</label>
      <InputStyles
        type="email"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
      />
      {showError && !values.email ? (
        <ErrorMessage>Email is required!</ErrorMessage>
      ) : null}
      <label htmlFor="message">What shall we chat about?</label>
      <TextAreaStyles
        name="message"
        id="message"
        value={values.message}
        onChange={handleChange}
      ></TextAreaStyles>
      {showError && !values.message ? (
        <ErrorMessage>Message is required!</ErrorMessage>
      ) : null}
      <ButtonStyles type="submit">Send Message</ButtonStyles>
    </FormStyles>
  );
}
