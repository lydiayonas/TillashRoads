import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LocationPermission from "./pages/LocationPermission";
import Home from "./pages/Home";
import SideMenu from "./pages/SideMenu";
import SOSAlert from "./pages/SOSAlert";
import RecentChats from "./pages/RecentChats";
import ChatScreen from "./pages/ChatScreen";
import Calls from "./pages/Calls";
import VoiceCall from "./pages/VoiceCall";
import Contacts from "./pages/Contacts";
import BottomNav from "./components/BottomNav";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/location" element={<LocationPermission />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<SideMenu />} />
            <Route path="/sos" element={<SOSAlert />} />
            <Route path="/recent-chats" element={<RecentChats />} />
            <Route path="/chat" element={<ChatScreen />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/voice-call" element={<VoiceCall />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
