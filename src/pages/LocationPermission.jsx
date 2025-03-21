import { useNavigate } from "react-router-dom";

const LocationPermission = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Allow Location Access
      </h1>
      <p className="mb-4 text-center text-gray-600">
        This app requires your location to provide emergency services.
      </p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded"
        onClick={() => navigate("/home")}
      >
        Allow
      </button>
    </div>
  );
};

export default LocationPermission;
