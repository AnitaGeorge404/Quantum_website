import { useState, useEffect } from "react";

export default function PosterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if poster was already closed in this session
    const posterClosed = sessionStorage.getItem("posterClosed");
    
    if (!posterClosed) {
      // Show popup after a short delay for smooth appearance
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark poster as closed for this session
    sessionStorage.setItem("posterClosed", "true");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto">
          {/* Title */}
          <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between rounded-t-xl">
            <h2 className="text-lg font-semibold text-slate-900">
              Click Here To Register
            </h2>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Poster Image */}
          <div className="bg-gray-50 p-4">
            <img
              src="/brand/poster.jpeg"
              alt="QuDAIS Summer Internship 2026 Poster"
              className="w-full h-auto object-contain"
              onError={(e) => {
                // Fallback if jpeg doesn't work
                e.target.src = "/brand/poster.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
