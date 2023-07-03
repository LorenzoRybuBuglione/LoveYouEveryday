import { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import Home from "./src/pages/Home";
import Loading from "./src/pages/Loading";
import messages from "./src/json/db.json";

export default function App() {
  const [fontLoaded] = useFonts({
    Regular: Montserrat_400Regular,
    SemiBold: Montserrat_600SemiBold,
    Pacifico: Pacifico_400Regular,
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [special, setSpecial] = useState("");

  const month = new Date().getMonth();
  const day = new Date().getDate();

  useEffect(() => {
    setMessage(messages[month + 1][day - 1].message);
    setSpecial(messages[month + 1][day - 1].special);
    setLoading(false);
  }, []);

  if (loading || !fontLoaded) {
    return <Loading />;
  }

  return <Home month={month} day={day} message={message} special={special} />;
}
