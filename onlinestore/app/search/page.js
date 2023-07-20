import React from 'react'

const page = () => {
  return (
    <form>
    <div class="flex mt-32 mb-32 md:ml-72">
        <div class="relative w-full md:w-1/2 md:pl-56">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-300 dark:border-l-orange-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-orange-500"  placeholder="Search Products"  required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
  )
}

export default page
