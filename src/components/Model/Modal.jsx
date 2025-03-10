/* eslint-disable react/prop-types */
import { ImCross } from "react-icons/im";

const Modal = ({ isVisible, onClose,children }) => {
  if (!isVisible) return null;

  const handleClose=(e)=>{
    if(e.target.id==='wrapper') onClose();

  }
  return (
    <div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    id='wrapper'
    onClick={handleClose}
    >
      <div className="w-[600px]">
        <button
          className="flex flex-col place-self-end text-xl p-1"
          onClick={() => onClose()}
        >
          <ImCross className="text-[#00ffb3]"/>
        </button>
        <div className="bg-gray-400 p-2 rounded text-black">{children}</div>
      </div>
    </div>
  );
};

export default Modal;



