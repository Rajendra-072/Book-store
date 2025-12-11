import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <div className="mt-10 min-h-screen bg-gray-50w-full md:pl-10 md:pr-6 my-8  flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white dark:bg-slate-800 shadow-lg p-8 rounded-2xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Have questions or need help? We'd love to hear from you!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-slate-700 outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-slate-700 outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full p-3 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-slate-700 outline-none"
              {...register("message", { required: true })}
            />
            <br />
            {errors.message && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white py-3 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-2">OR Reach Us At</h3>
          <p className="text-gray-700 dark:text-gray-300">📞 +91 9876543210</p>
          <p className="text-gray-700 dark:text-gray-300">
            📧 support@bookstore.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            📍 Betul, Madhya Pradesh, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
