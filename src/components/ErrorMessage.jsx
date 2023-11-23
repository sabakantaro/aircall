import React from "react";

const ErrorMessage = ({ error }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-2xl font-semibold text-center text-gray-800">
      {error}
    </h2>
  </div>
);

export default ErrorMessage;