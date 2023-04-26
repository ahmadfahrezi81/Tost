import React from 'react'

const Timepick = () => {
  return (
    <div>
        <div className="border-b bg-white border-gray-200 sm:border-b-0 sm:border-r rounded-md shadow-md">
            <div className="flex items-center">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 mx-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"/>
                <label /*for="horizontal-list-radio-license"*/ className="py-3 text-sm font-medium text-gray-900 me-5">13:00</label>
            </div>
        </div>
    </div>
  )
}

export default Timepick