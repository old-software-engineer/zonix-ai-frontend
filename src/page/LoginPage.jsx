import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-900">
          Your ideas, amplified
        </h1>
        <p className="mt-4 text-gray-600">
          Privacy-first AI that helps you create in confidence.
        </p>
      </div>
      <div className="mt-8 w-full max-w-sm">
        <button className="w-full py-3 bg-white text-gray-900 font-medium rounded border border-gray-300 shadow-sm hover:bg-gray-50 flex items-center justify-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>
        <div className="mt-4 text-center text-gray-500">OR</div>
        <input
          type="email"
          placeholder="Enter your personal or work email"
          className="w-full mt-4 py-3 px-4 rounded border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <button className="w-full mt-4 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600">
          Continue with email
        </button>
        <p className="mt-4 text-sm text-center text-gray-500">
          By continuing, you agree to Anthropic’s{" "}
          <a href="#" className="text-indigo-600 underline">
            Consumer Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 underline">
            Usage Policy
          </a>
          , and acknowledge their{" "}
          <a href="#" className="text-indigo-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <button className="mt-8 py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
        Learn more ↓
      </button>
    </div>
  );
};

export default LoginPage;
