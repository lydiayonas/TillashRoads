import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-200 p-4 flex justify-around">
      <Link to="/home" className="text-blue-500">Home</Link>
      <Link to="/recent-chats" className="text-blue-500">Chats</Link>
      <Link to="/calls" className="text-blue-500">Calls</Link>
      <Link to="/contacts" className="text-blue-500">Contacts</Link>
    </div>
  );
};

export default BottomNav;
