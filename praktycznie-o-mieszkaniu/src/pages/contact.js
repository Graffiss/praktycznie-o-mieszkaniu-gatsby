import React from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import styled from "styled-components"
import Button from "../components/Button/Button"

const StyledWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledInput = styled.input`
  background-color: rgba(251, 211, 93, 0.8);
  height: 55px;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: black;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 300;
  padding-left: 20px;
  outline: none;

  ::placeholder {
    color: black;
  }
  @media (max-width: 768px) {
    width: 340px;
    height: 50px;
    font-size: 16px;
  }
`

const StyledTextarea = styled.textarea`
  background-color: rgba(251, 211, 93, 0.8);
  height: 30vh;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: black;
  font-size: 18px;
  font-weight: 300;
  font-family: "Montserrat";
  padding-left: 20px;
  padding-top: 20px;
  outline: none;

  ::placeholder {
    color: black;
  }
  @media (max-width: 768px) {
    width: 340px;
    font-size: 16px;
  }
`

const ContactPage = () => (
  <StyledWrapper>
    <Formik
      initialValues={{
        title: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "https://us-central1-praktycznie-o-mieszkaniu.cloudfunctions.net/sendEmail",
            values
          )
          .then(res => {
            console.log(res)
            setSubmitting(false)
          })
          .catch(err => {
            console.log(err)
            setSubmitting(false)
          })
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="title"
            placeholder="Tytuł wiadomości"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />

          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <StyledTextarea
            type="textarea"
            name="message"
            placeholder="Wpisz treść wiadomości..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />

          <Button type="submit" disabled={isSubmitting}>
            Wyślij
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
)

export default ContactPage
