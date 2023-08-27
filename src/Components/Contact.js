import React from 'react'

const Contact = () => {
  return (
  
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form className="max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
      </div>

  )
}

export default Contact  ;