import { useState, useEffect } from "react";
import { axiosAPI } from "./axios";
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
    <ul className="flex flex-col gap-5 ">
      {methods.map((method, index) => (
        <li
          className={`bg-main py-4 px-8 w-48 text-xs rounded-xl method-shadow flex flex-row gap-4 cursor-pointer ${
            selectedMethods.includes(method) ? "border-2 border-stroke" : ""
          }`}
          key={index}
          onClick={() => handleMethodSelect(method)}
        >
          <DnDIcon width={7} height={15} />
          {method}
        </li>
      ))}
    </ul>
  );
};
export default MethodsList;
