/* eslint-disable react/prop-types */
function ErrorMessage({ errorMessage }) {
  return (
    <p className="text-white">
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
