import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded w-64"
      />
      <button
        className="bg-green-500 text-white px-6 py-2 rounded"
        onClick={() => navigate("/home")}
      >
        Sign Up
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
