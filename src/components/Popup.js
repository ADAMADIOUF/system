import React, { useEffect } from 'react'
import promo from '../assets/popup.png'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Popup = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
    }, 5000)
  }, [])

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#a64737'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          MI MEXICO RESTAURANT
          <img src={promo} alt='' className='promo' />
        </h2>
        <button onClick={closeModal} className='modal-btn'>
          close
        </button>
        <div></div>
      </Modal>
    </div>
  )
}
export default Popup
