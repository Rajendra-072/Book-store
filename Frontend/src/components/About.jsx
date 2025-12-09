import React from "react";

const About = () => {
  return (
    <div className="mt-10 min-h-screen w-full md:pl-10 md:pr-6 my-8 flex items-center justify-center p-6 bg-gray-50 dark:bg-slate-900 dark:text-white">
      <div className="max-w-3xl w-full bg-white dark:bg-slate-800 shadow-lg p-8 rounded-2xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          About Us
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Welcome to <span className="font-bold">BookStore</span>, your one-stop
          destination for discovering amazing books across all genres. Our
          mission is to make reading more accessible, enjoyable, and affordable
          for everyone.
        </p>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">📚 Who We Are</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are a passionate team of book lovers committed to bringing you
              the best reading experience. Whether you're into fiction,
              self-help, science, or academic resources—BookStore has something
              for every reader.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To spread the love for reading by providing a user-friendly
              platform where readers can explore, discover, and enjoy books with
              ease.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 What We Offer</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Wide collection of books & categories</li>
              <li>Easy book browsing experience</li>
              <li>User-friendly design for all age groups</li>
              <li>Fast and secure book checkout process</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Start your reading journey today with{" "}
            <span className="font-bold">BookStore</span>. We are here to help
            you explore a world full of knowledge and imagination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
