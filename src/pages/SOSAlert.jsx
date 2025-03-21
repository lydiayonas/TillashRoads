import { useNavigate } from "react-router-dom";

const SOSAlert = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">SOS Alert</h1>
      <p className="mb-4">Emergency Alert Sent!</p>
      <button className="bg-white text-red-500 px-6 py-2 rounded" onClick={() => navigate("/home")}>
        Go Back
      </button>
    </div>
  );
};

export default SOSAlert;
