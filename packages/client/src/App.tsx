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
    return <p className="font-bold p-4 text-3xl">{message}</p>;
  }

  return <>No message available.</>;
}

export default App;
