import { useState, useEffect } from "react";
import { axiosAPI } from "./axios.ts";
import DnDIcon from "../components/icons/DnDIcon.tsx";

interface MethodsListProps {
  selectedMethods: string[];
  onMethodsChange: (selectedMethods: string[]) => void;
}

const MethodsList = ({
  selectedMethods,
  onMethodsChange,
}: MethodsListProps) => {
  const [methods, setMethods] = useState<string[]>([]);
  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const response = await axiosAPI.get("/methods");
        const methodsArray = response.data.methods;
        console.log("API Response:", methodsArray); // Methods in console
        setMethods(methodsArray || []); // Return methods arr or an empty arr
      } catch (error) {
        console.log("Error fetching methods: ", error);
      }
    };
    fetchMethods();
  }, []);

  const handleMethodSelect = (method: string) => {
    const updatedMethods = selectedMethods.includes(method)
      ? selectedMethods.filter((m) => m !== method)
      : [...selectedMethods, method];
    onMethodsChange(updatedMethods);
  };

  useEffect(() => {
    onMethodsChange(selectedMethods);
  }, [selectedMethods, onMethodsChange]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-subtext">ACTIVE</p>

        <ul className="flex flex-col gap-2">
          {selectedMethods.map((method, index) => (
            <li
              className={`flex flex-row items-center gap-5 py-3 px-6 w-52 rounded-xl cursor-pointer hover:bg-backgroud`}
              key={index}
              onClick={() => handleMethodSelect(method)}
            >
              <DnDIcon width={7} height={15} />
              {method}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-subtext">AVAILABLE</p>

        <ul className="flex flex-col gap-2">
          {methods.map((method, index) => (
            <li
              className={`flex flex-row items-center gap-5 py-3 px-6 w-52 rounded-xl cursor-pointer hover:bg-backgroud
    ${selectedMethods.includes(method) ? "outline-2 outline-stroke" : ""}`}
              key={index}
              onClick={() => handleMethodSelect(method)}
            >
              <DnDIcon width={7} height={15} />
              {method}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MethodsList;
