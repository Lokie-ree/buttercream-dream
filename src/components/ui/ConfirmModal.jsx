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
          Confirm Removal
        </h3>
        <p className="py-2 text-secondary">{message}</p>
        <div className="modal-action flex-col justify-center items-center gap-3">
          <button
            className="btn btn-outline outline-accent w-full text-accent hover:bg-neutral hover:text-primary"
            onClick={() => {
              if (ref.current) ref.current.close();
              if (onCancel) onCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-accent w-full text-base-100 hover:bg-neutral hover:text-primary"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default ConfirmModal;
