import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protect this route */}
        <Route path="/auth" element={user ? <Auth /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;




