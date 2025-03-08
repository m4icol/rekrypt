import { useState, useEffect } from "react";
import { axiosAPI } from "./axios.ts";
import DnDIcon from "../components/icons/DnDIcon.tsx";
import AddIcon from "../components/icons/AddIcon.tsx";
import RemoveIcon from "../components/icons/RemoveIcon.tsx";
import { motion } from "framer-motion";

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

        <ul className="flex flex-col">
          {selectedMethods.length === 0 ? (
            <p className="text-gray-500 py-3">No methods selected</p>
          ) : (
            selectedMethods.map((method, index) => (
              <motion.li
                className={`flex flex-row items-center gap-5 py-3 px-6 w-52 rounded-xl cursor-pointer hover:bg-backgroud`}
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
              >
                <span className="flex-shrink-0">
                  <DnDIcon></DnDIcon>
                </span>
                <span className="truncate">{method}</span>
              </motion.li>
            ))
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-subtext">AVAILABLE</p>

        <ul className="flex flex-col gap-2">
          {methods.map((method, index) => (
            <li
              className={`flex flex-row items-center gap-5 py-3 px-6 w-56 rounded-xl cursor-pointer hover:bg-backgroud
    ${selectedMethods.includes(method) ? "outline-2 outline-stroke" : ""}`}
              key={index}
              onClick={() => handleMethodSelect(method)}
            >
              <span className="flex-shrink-0">
                {selectedMethods.includes(method) ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
              </span>
              <span className="truncate">{method}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MethodsList;
