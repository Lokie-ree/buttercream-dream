import React, { forwardRef } from "react";

const ConfirmModal = forwardRef(({ id, message, onConfirm, onCancel }, ref) => {
  return (
    <dialog ref={ref} id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-primary">Confirm Action</h3>
        <p className="py-4 text-accent">{message}</p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={onConfirm}>
            Confirm
          </button>
          <button
            className="btn"
            onClick={() => {
              if (ref.current) ref.current.close();
              if (onCancel) onCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default ConfirmModal;
