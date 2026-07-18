import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      navigate("/login");
    } else {
      setUser(data.user);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#0f172a", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Dashboard 🚀</h1>

      {user && <p>Welcome: {user.email}</p>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;