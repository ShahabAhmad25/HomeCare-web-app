import React from 'react'

const OurImpact = () => {
  return (
    <section className="section bg-gray-50 ">
      <div classNameName='container'>
        <div className="flex flex-col gap-10 px-4 ">
          <div className="flex flex-col gap-4 text-center">
            <h1
              className=" text-3xl font-bold mx-auto mb-2">
              Our Impact
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-blue-700/90 text-5xl font-extrabold">10,000+</p>
              <p className="text-gray-600  mt-2 text-lg">Happy Customers</p>
            </div>
            <div>
              <p className="text-blue-700/90 text-5xl font-extrabold">98%</p>
              <p className="text-gray-600  mt-2 text-lg">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-blue-700/90 text-5xl font-extrabold">5,000+</p>
              <p className="text-gray-600  mt-2 text-lg">Trusted Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurImpact