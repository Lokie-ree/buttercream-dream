import React, { forwardRef } from "react";

const ConfirmModal = forwardRef(({ id, message, onConfirm, onCancel }, ref) => {
  return (
    <dialog
      ref={ref}
      id={id}
      className="modal modal-bottom sm:modal-middle"
      onClose={onCancel}
    >
      <div className="modal-box">
        <h3 className="font-extrabold text-lg text-primary text-center">
          Confirm Action
        </h3>
        <p className="py-4 text-secondary">{message}</p>
        <div className="modal-action justify-center gap-8">
          <button className="btn btn-accent text-base-100" onClick={onConfirm}>
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
