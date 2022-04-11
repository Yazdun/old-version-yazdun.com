import Animated from 'react-mount-animation'
import s from './styles.module.scss'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { useRef } from 'react'
import { useOnClickOutside } from 'hooks'

const mountAnimation = `
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`

export const SuccessModal = ({ show, email, setShow }) => {
  const ref = useRef()
  useOnClickOutside(ref, () => setShow(false))

  return (
    <Animated.div
      className={s.modal}
      show={show}
      mountAnim={mountAnimation}
      time={0.2}
    >
      <div className={s.card} ref={ref}>
        <button
          className={s.close}
          aria-label="close modal"
          onClick={() => setShow(false)}
        >
          <MdClose />
        </button>
        <IoMailUnreadOutline className={s.icon} />
        <h3>Message sent !</h3>
        <p>
          Your message has been successfully submitted ! I will contact you via{' '}
          <strong>{email}</strong> very soon
        </p>
      </div>
    </Animated.div>
  )
}
