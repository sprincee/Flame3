"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-20 p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me!</h1>
      <p className="text-lg text-center max-w-lg mb-10">
        Have questions? Feedback? I'd love to hear from you.
      </p>

      <form className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 rounded border transition 
             bg-white text-black placeholder-gray-500 border-gray-300 
             dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
            placeholder="Enter your name. . ."
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 rounded border transition 
             bg-white text-black placeholder-gray-500 border-gray-300 
             dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
            placeholder="Enter your email. . ."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full p-2 rounded border transition 
             bg-white text-black placeholder-gray-500 border-gray-300 
             dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
            placeholder="Type your message here. . ."
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded transition 
          bg-primary text-primary-foreground  
          dark:bg-secondary dark:text-secondary-foreground"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
