import { Button, Input, ServerErrors, Textarea } from 'elements'
import { RiChatSmile2Line } from 'react-icons/ri'
import { useForm, FormProvider } from 'react-hook-form'
import { EmailInput, isError, MessageInput, NameInput } from 'utils'
import { SuccessModal } from './successModal'
import { useState } from 'react'
import axios from 'axios'
import '/axios'

export const ContactForm = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [serverErrors, setServerErrors] = useState()

  const execute = async data => {
    setLoading(true)
    setServerErrors(null)
    setShow(false)
    try {
      await axios
        .post('/message/create', data)
        .then(res => {
          setEmail(res.data.message.email)
          setShow(true)
          console.log(res.data)
          setServerErrors(null)
          methods.reset()
        })
        .then(() => setLoading(false))
    } catch (error) {
      setServerErrors(error.response.data.msg.split(','))
      setLoading(false)
      console.log(error)
    }
  }

  const methods = useForm()
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => execute(data))}>
          <Input {...EmailInput} />
          <Input {...NameInput} />
          <Textarea {...MessageInput} />
          <ServerErrors errors={serverErrors} />
          <Button
            active
            fullwidth
            disable={loading || isError(methods.formState.errors)}
            loadingText="sending"
            loading={loading}
          >
            <RiChatSmile2Line />
            send message
          </Button>
        </form>
      </FormProvider>
      <SuccessModal show={show} setShow={setShow} email={email} />
    </>
  )
}
