import React, {useState} from "react";
import Modal from "react-modal";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import * as IoIcon from "react-icons/io5";
import * as FiIcon from "react-icons/fi";

Modal.setAppElement("#root");
const RequestModal =(props)=>{
  const [isModalOpen, setIsModalOpen]=useState(false);
  const handleOpenModal=(dinner)=>{
    //get dinner id and update the confirm status using axios.
    setIsModalOpen(true);
    console.log(dinner)
  }
  const handleCloseModal=()=>{
    setIsModalOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      transition:'All 0.5s ease',
      position:'relative',
      width: '40%',
      height: '240px',
      textAlign: 'center'
    },
  };
  const defaultStyles={
    content: {
      top: '0',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(0, 0)',
      transition:'All 0.5s ease',
      position:'relative',
      width: '40%',
      height: '240px',
      textAlign: 'center'
    },
  }

    return (
        <div>
            <button type="button" onClick={()=>handleOpenModal(props.dinner)} className="request-confirmation">Request Confirmation</button>
            <Modal
            isOpen={isModalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={handleCloseModal}
            style={isModalOpen? customStyles:defaultStyles}
            contentLabel="Example Modal"
          >
            <FaIcon.FaTimes style={{position:'absolute',right:'10px',top:'10px',cursor:'pointer'}} onClick={handleCloseModal} />
            <div className="confirm-tick">
              <AiIcon.AiOutlineCheck style={{color:"#fff",position:"absolute",top:"30%",left:"35%",fontSize:'large'}}  />
            </div>
            
            <div style={{fontSize:'xx-large'}}>Successful!</div>
            <p>Your request to confirm cook dinner has been submitted.</p>
            
          </Modal>
        </div>
      );

}

export default RequestModal;