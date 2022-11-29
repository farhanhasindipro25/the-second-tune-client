import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  modalAction,
  modalActionBtnName,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-primary">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-accent">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="confirmationModal"
              className="btn btn-error"
              onClick={() => modalAction(modalData)}
            >
              {modalActionBtnName}
            </label>
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
