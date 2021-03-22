import React from 'react'
// import axios from 'axios'

import { PageTitle, Form, FormControl, Input, Textarea, SubmitButton } from '../components'

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = React.useState(true)
  const [minLengthError, setMinLengthError] = React.useState(false)
  const [maxLengthError, setMaxLengthError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [inputValid, setInputValid] = React.useState(false)

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break

        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break

        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break

        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break

        default:
          return false
      }
    }
  }, [value])

  React.useEffect(() => {
    if (isEmpty || emailError || minLengthError || maxLengthError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue)
  const [isDirty, setDirty] = React.useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setDirty(true)
  }

  const onClear = (value) => {
    setValue(value)
    setDirty(false)
  }

  return {
    value,
    onChange,
    onBlur,
    onClear,
    isDirty,
    ...valid,
  }
}

const Contacts = () => {
  const firstname = useInput('')
  const email = useInput('', { isEmpty: true, isEmail: true })
  const theme = useInput('')
  const message = useInput('', { isEmpty: true, minLength: 10 })
  const [formSuccess, setFormSuccess] = React.useState(false)

  const formData = (e) => {
    e.preventDefault()
    console.log({
      Имя: firstname.value,
      Емайл: email.value,
      Тема: theme.value,
      Сообщение: message.value,
    })
    firstname.onClear('')
    email.onClear('')
    theme.onClear('')
    message.onClear('')

    setFormSuccess(true)
    setTimeout(() => {
      setFormSuccess(false)
    }, 5000)
  }

  return (
    <div className="contacts">
      <div className="container">
        <PageTitle text="Контакты" />

        <Form>
          <div className="form__row">
            <FormControl className="form__control">
              <Input value={firstname.value} onChange={(e) => firstname.onChange(e)} onBlur={(e) => firstname.onBlur(e)} id="firstname" type="text" placeholder="Ваше имя" name="firstname" />
            </FormControl>
            <FormControl className="form__control">
              {email.isDirty && email.isEmpty && <div className="error">Введите e-mail</div>}
              {email.isDirty && email.emailError && !email.isEmpty && <div className="error">Некорректный e-mail</div>}
              <Input value={email.value} onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} id="email" type="text" placeholder="Ваш e-mail*" name="email" />
            </FormControl>
          </div>
          <FormControl className="form__control">
            <Input value={theme.value} onChange={(e) => theme.onChange(e)} onBlur={(e) => theme.onBlur(e)} id="theme" type="text" placeholder="Тема" name="theme" />
          </FormControl>
          <FormControl className="form__control">
            {message.isDirty && message.isEmpty && <div className="error">Введите сообщение</div>}
            {message.isDirty && message.minLengthError && !message.isEmpty && <div className="error">Минимум 10 символов</div>}
            <Textarea value={message.value} onChange={(e) => message.onChange(e)} onBlur={(e) => message.onBlur(e)} id="message" placeholder="Сообщение*" name="message" />
          </FormControl>

          <SubmitButton
            disabled={!email.inputValid || !message.inputValid}
            onClick={(e) => {
              formData(e)
            }}
          >
            Отправить
          </SubmitButton>
          {formSuccess && <div className="form__ok">Ваше сообщение отправлено!</div>}
        </Form>

        <div className="contact__socials">
          <a href="https://vk.com/flubermax" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-vk"></i>
          </a>
          <a href="https://www.instagram.com/flubermax" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/maksim-gorbachev-62b269184/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts
