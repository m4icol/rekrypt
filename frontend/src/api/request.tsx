import { useState, useEffect } from "react";
import { axiosAPI } from "./axios";

function MethodsList() {
  const [methods, setMethods] = useState<string[]>([]);
  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const response = await axiosAPI.get("/methods");
        console.log("API Response:", response.data);
        setMethods(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("Error fetching methods: ", error);
      }
    };
    fetchMethods();
  }, []);

  return (
    <div>
      <h2>Lista de Metodos</h2>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
}

export default MethodsList;
