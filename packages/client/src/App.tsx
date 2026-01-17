import { useEffect, useState } from "react";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Fetching message from server...");
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  if (message) {
    return <div>{message}</div>;
  }

  return <>No message available.</>;
}

export default App;
