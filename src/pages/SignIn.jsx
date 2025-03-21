import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <input
        type="text"
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded"
        onClick={() => navigate("/home")}
      >
        Login
      </button>
      <p className="mt-4">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
