import React from "react";

const FormModal = ({ isOpen, closeModal, formUrl, title }) => {
  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="font-bold text-lg text-primary">{title}</h3>
            <div className="py-4">
              {/* Google Form ifram with dynamic formUrl */}
              <iframe
                src={formUrl}
                style={{
                  width: "100%",
                  height: "600px",
                  border: "none",
                }}
                title={title}
              >
                Loading...
              </iframe>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-primary text-base-100"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
