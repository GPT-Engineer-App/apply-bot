import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx"; // Import the Profile page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} /> {/* Add route for Profile page */}
      </Routes>
    </Router>
  );
}

export default App;