/* eslint-disable react/prop-types */
function ErrorMessage({ errorMessage }) {
  return (
    <p className="text-red-300">
      {errorMessage.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
}

export default ErrorMessage;
