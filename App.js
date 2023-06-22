import { useEffect, useState } from "react";

import Home from "./src/pages/Home";
import Loading from "./src/pages/Loading";
import messages from "./src/json/db.json";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [special, setSpecial] = useState("");

  const month = new Date().getMonth();
  const day = new Date().getDate();

  console.log(messages[month+1][day-1])

  useEffect(() => {
    setMessage(messages[month+1][day-1].message);
    setSpecial(messages[month+1][day-1].special);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Home month={month} day={day} message={message} special={special} />;
}
