import { Button, Input, ServerErrors, Textarea } from 'elements'
import { RiChatSmile2Line } from 'react-icons/ri'
import { useForm, FormProvider } from 'react-hook-form'
import { EmailInput, isError, MessageInput, NameInput } from 'utils'
import { SuccessModal } from './successModal'
import { useState } from 'react'

export const ContactForm = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)

  const methods = useForm()
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => console.log(data))}>
          <Input {...EmailInput} />
          <Input {...NameInput} />
          <Textarea {...MessageInput} />
          {/* <ServerErrors errors={serverErrors} /> */}
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
