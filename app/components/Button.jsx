'use client'

export default function Button({title}){
    return (
        <button 
          onClick={() => console.log('running button')}
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            {title}
        </button>
    )
}