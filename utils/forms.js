export const EmailInput = {
  name: 'email',
  label: 'email',
  type: 'text',
  id: 'email',
  placeholder: 'email@test.com',
  validation: {
    required: {
      value: true,
      message: 'email is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not a valid email',
    },
  },
}

export const NameInput = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'e.g. Jack',
  validation: {
    required: {
      value: true,
      message: 'name is required',
    },
    minLength: {
      value: 3,
      message: 'min length is 3 chars',
    },
    maxLength: {
      value: 50,
      message: 'max length is 3 chars',
    },
  },
}

export const MessageInput = {
  name: 'message',
  label: 'message',
  type: 'text',
  id: 'message',
  placeholder: 'e.g. Jack',
  validation: {
    required: {
      value: true,
      message: 'message is required',
    },
    required: {
      value: true,
      message: 'message is required',
    },
  },
}
