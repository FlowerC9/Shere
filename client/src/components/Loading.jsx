import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Loading = ({ isError }) => {
  const location = useLocation();
  const username = location?.state?.username;
  const navigate = useNavigate();
  const [message, setMessage] = useState(`Joining the room ${username}`);
  useEffect(() => {
    if (isError) {
      setMessage("oops! Something went wrong. Please try again later.");
    }
  }, [isError]);
  const gotoHomePage = () => {
    navigate("/");
  };
  return (
    <div className="h-screen min-h-screen flex items-center justify-center flex-col gap-6">
      {!isError && (
        <div className="flex space-x-2 justify-center items-center">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-4 w-4 bg-slate-300 rounded-full animate-bounce"></div>
        </div>
      )}
      <span className="text-lg font-medium text-slate-300">{message}</span>
      {isError && (
        <button
          onClick={gotoHomePage}
          className="bg-primary py-2 px-8 rounded-lg text-black"
        >
          Go to HomePage
        </button>
      )}
    </div>
  );
};

Loading.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export default Loading;
