import React, { Fragment, useEffect } from "react";

const Modal = (props) => {
  let image = props.images[0].url;
  const nextImage = () => {
    let nextImage = props.images[0 + 1];
    image = nextImage.url;
  };

  return (
    <Fragment>
      {props.show ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <img
                        className="w-34"
                        src={image}
                        alt="Sunset in the mountains"
                      />
                      <div className="text-white mt-2">
                        {props.images[0].name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {props.button}
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={nextImage}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Modal;
