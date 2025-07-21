import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

export interface CustomModalProps {
  isOpen: boolean;
  onClose: (e?: any) => void;
  children: React.ReactNode;
  title: string;
  className?: string;
  hideHeader?: boolean;
  centered?: boolean;
  mostZIndex?: boolean;
  width?: number;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
  hideHeader = false,
  centered = false,
  mostZIndex = false,
  width = 600,
}) => {
  if (typeof window === "undefined") return null;

  const modalZIndex = mostZIndex ? "z-[9999]" : "z-50";

  return createPortal(
    <>
      {isOpen && (
        <div
          className={clsx(
            "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm",
            modalZIndex
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose(e); // Close when clicking outside
          }}
        >
          <div
            style={{ width }}
            className={clsx(
              "relative rounded-xl bg-white shadow-lg transition-all duration-300 !px-6",
              centered ? "flex flex-col items-center" : "",
              className
            )}
          >
            {!hideHeader && (
              <div className="flex flex-row items-center justify-between border-b w-full !py-3 !mb-2">
                <h2 className="text-lg font-bold">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                >
                  &times;
                </button>
              </div>
            )}
            <div className="p-4">{children}</div>
            {/* <button type="submit"
             className="text-white sticky !bottom-2 !self-end bg-blue-700  hover:bg-blue-800 !focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-full h-max sm:w-auto !px-5 !py-2.5 !mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ذخیره</button> */}
          </div>

        </div>
      )}
    </>,
    document.body
  );
};

export default CustomModal;
