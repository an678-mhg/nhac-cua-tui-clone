import React from "react";

const Modal = ({
  children,
  handleClose,
}: {
  children: React.ReactNode;
  handleClose: () => void;
}) => {
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-opacity-50 bg-black modalOpacity"
    >
      <div
        className="w-[400px] max-w-[calc(100%-32px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
