import { useNavigate } from "react-router-dom"; 
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; 
import { useEffect, useState } from "react";

const Auth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the currently logged-in user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Successfully Logged Out!");
      navigate("/"); // Redirect to Login Page
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to the Authentication System</h2>
      {user ? <p>Logged in as: {user.email}</p> : <p>Loading...</p>}
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Auth;
