import React from 'react'
import Image from 'next/image'
import cc from '/Users/nisyaqanita/Documents/Academics/2nd Year/Sem 4/WIF2003 - Web Programming/final_pro/Tost/public/assets/cc.png'
import fpx from '/Users/nisyaqanita/Documents/Academics/2nd Year/Sem 4/WIF2003 - Web Programming/final_pro/Tost/public/assets/image 8.png'

const payment = () => {
  return (
    <div className='bg-custom-green'>
      <div className='card h-1/2 w-1/2 bg-white flex rounded-lg align-middle items-center'>
        <div className='container px-7 py-7'>
          <h5 className='text-gray-500'>Select payment method</h5>
          <hr className='mb-2 bg-gray-500'/>
          <div className='flex flex-row gap-x-20 my-4'>
            <div className="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio" className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
              <Image
                src={cc}
                alt="CC or Debit"
                height={16}
                width={21}
                style={{opacity: 0.8}}
              />
              <label /*for="default-radio-1"*/ className="text-sm font-regular text-gray-500 ml-2 block">Credit or Debit Card</label>
            </div>

            <div className="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-4"/>
              <Image
                src={fpx}
                alt="FPX"
                height={32}
                width={42}
              />
              <label /*for="default-radio-2"*/ className="ml-2 text-sm font-medium text-gray-900 "></label>
            </div>
          </div>

          <div className=''>
            <div className='mb-2'>
              <div className="w-full mb-2">
                <select id="countries" className="font-sans bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Select bank</option>
                  <option value="may">Maybank</option>
                  <option value="rhb">RHB</option>
                  <option value="cimb">CIMB</option>
                  <option value="bis">Bank Islam</option>
                </select>
              </div>
            </div>
            <div className='mb-2'>
              <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name on card"/>
            </div>
            <div className='flex flex-row gap-2'>
              <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg basis-1/2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Card number"/>
              <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg basis-1/2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="CVV"/>
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div className='mt-10'>
              <p>Amount due:</p>
              <h3 className='text-black font-bold text-2xl'>
                RM33.00
              </h3>
            </div>
            <div className='mt-10 '>
              <button className='bg-green-700 hover:bg-green-800 px-5 py-3 rounded-md bottom-0 right-0 text-white'>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default payment