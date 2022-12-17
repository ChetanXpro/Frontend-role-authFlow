import { Link } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import Users from "./Users";

const Admin = () => {
  const refresh = useRefreshToken();
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      
      <Users />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
