import { useState, useEffect } from "react";
import "./App.css";
import UserList from "./UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  }, []);
  return (
    <div className="App">
      {users.map((user, id) => (
        <UserList key={id} userData={user} />
      ))}
    </div>
  );
}

export default App;
