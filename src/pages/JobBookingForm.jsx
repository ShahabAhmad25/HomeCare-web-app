import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobBookingForm = () => {
       const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); 
  };
  return (
  
    <div classNameName="container mx-auto px-4 py-8 sm:py-12">

     <div className="max-w-3xl mx-auto">
         <div className={`transition-filter duration-300 ${showModal ? "blur-sm pointer-events-none" : ""}`}></div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-8">Service
                Booking</h1>
            <form onSubmit={handleSubmit} className="bg-white  rounded-xl shadow-sm p-6 sm:p-8 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-900  mb-1"
                        for="service-type">Service Type</label>

                    <select
                        className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                        id="service-type" name="service-type">
                        <option>Select a service</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Gardener">Gardener</option>
                        <option value="Painter">Painter</option>
                        <option value="Sofa cleaning">Sofa cleaning</option>
                        <option value="Home Appliances Repair">Home Appliances Repair</option>

                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-900  mb-1"
                        for="problem-description">Problem Description</label>

                    <textarea
                        className=" py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                        id="problem-description" name="problem-description"
                        placeholder="Please describe the issue or the service you need..." rows="4"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-900  mb-1"
                        for="proposed-price">Proposed Price (PKR)</label>

                    <input
                        className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                        id="proposed-price" name="proposed-price" placeholder="e.g., 500" type="number" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-900  mb-1"
                        for="area-selection">Area Selection</label>
                    <select
                        className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                        id="area-selection" name="area-selection">
                        <option>Select your area</option>
                        <option>Satellite Town</option>
                        <option>University Road</option>
                        <option>Bhalwal Road</option>
                        <option>Civil Lines</option>
                        <option>Cantt Area</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-900  mb-1"
                            for="preferred-date">Preferred Date</label>

                        <input
                            className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                            id="preferred-date" name="preferred-date" type="date" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-900  mb-1"
                            for="preferred-time">Preferred Time</label>

                        <input
                            className=" py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                            id="preferred-time" name="preferred-time" type="time" />
                    </div>
                </div>
                <div className="border-t border-slate-200  pt-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Customer Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-900  mb-2"
                                for="customer-name">Name </label>
                            <input
                                className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                                id="customer-name" name="customer-name" placeholder="Your Name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-900  mb-2"
                                for="customer-phone">Phone </label>
                            <input
                                className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                                id="customer-phone" name="customer-phone" placeholder="03xx-xxxxxxx" type="tel" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-slate-900  mb-2"
                            for="customer-address">Address </label>
                        <input
                            className="py-3 px-2 w-full rounded-lg border-gray-300  bg-gray-100 "
                            id="customer-address" name="customer-address" placeholder="Your full address" type="text" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-900  mb-1">Payment
                        Method</label>

                    <div className="flex items-center space-x-6 mt-3">
                        <div className="flex items-center">
                            <input id="cash-on-service"
                                className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-gray-300 "
                                name="payment-method" type="radio" value="cash" />
                            <label className="ml-2 block text-sm text-slate-900 " for="cash-on-service">
                                Cash on Service
                            </label>

                        </div>
                        <div className="flex items-center">
                            <input id="online-payment"
                                className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-gray-300 "
                                name="payment-method" type="radio" value="online" />
                            <label className="ml-2 block text-sm text-slate-900" for="online-payment">
                                Online
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 ">
                    <button type="submit" className="w-full rounded-lg px-6 py-3 text-base font-bold bg-blue-700/90 text-white hover:blue-700/80 transition-colors shadow-lg shadow-primary/20">Book
                        Now</button>
                    <p className="text-center text-sm text-slate-900 mt-4">📞 Our representative will
                        call you to confirm.</p>
                </div>
            </form>
        </div>
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
  )
}

export default JobBookingForm