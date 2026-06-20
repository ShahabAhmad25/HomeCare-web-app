import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const ProviderBookingForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); 
  };

 

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 relative">
      
      <div className={`transition-filter duration-300 ${showModal ? "blur-sm pointer-events-none" : ""}`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-8">
          Book Service with Provider
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 space-y-6">
          {/* Provider & Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Provider</label>
            <input
              type="text"
             placeholder="Provider Name"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2"/>
          </div>


        
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Problem Description</label>
            <textarea
              placeholder="Describe your problem..."
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2"
              rows="4"
              required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Proposed Price (PKR)</label>
            <input
              type="number"
              placeholder="e.g., 500"
              className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2" />
          </div>

          {/* Customer Details */}
          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Customer Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2"
                required/>
              <input
                type="tel"
                placeholder="03xx-xxxxxxx"
                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2"
                required />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your full address"
                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-3 px-2"
                required/>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg px-6 py-3 text-base font-bold bg-blue-700/80 text-white hover:bg-blue-800/90 transition-colors shadow-lg shadow-blue-800/20">
            Book Now
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Modal box */}
          <div className="bg-white rounded-xl p-8 shadow-lg z-50 max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
            <p>Thank you! Your booking  has been received.</p>
            <p>We will contact you shortly to confirm the details.</p>
            <button
              onClick={() => navigate("/")} 
              className="mt-6 px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors" >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProviderBookingForm;
