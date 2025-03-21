import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <button className="bg-red-500 text-white px-6 py-2 rounded mb-4" onClick={() => navigate("/sos")}>
        SOS Alert
      </button>
      <button className="bg-blue-500 text-white px-6 py-2 rounded" onClick={() => navigate("/recent-chats")}>
        Recent Chats
      </button>
    </div>
  );
};

export default Home;
