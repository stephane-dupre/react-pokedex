import { useEffect, useState } from "react";

export default function useType(typeRaw, lang = "en") {
  const [type, setType] = useState([]);
  useEffect(() => {
    const fetchType = async () => {
      try {
        const response = await fetch("/types.json");
        const typesJson = await response.json();
        const typeJson = await typesJson[typeRaw][lang];
        typeJson ? setType(typeJson) : setType(typeRaw);
      } catch (e) {
        console.error(e);
      }
    };
    fetchType();
  }, [lang, typeRaw]);
  return type;
}
