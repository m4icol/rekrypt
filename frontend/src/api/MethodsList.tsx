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
        setMethods(methodsArray || []);
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

  return (
    <div className="flex flex-col items-center gap-10 pl-1">
      <ul className="flex flex-col gap-2 w-52">
        <li className="pb-2 text-sm font-medium text-subtext">ACTIVE</li>
        {selectedMethods.length === 0 ? (
          <li className="w-48 py-1 pl-4 text-subtext">No methods selected</li>
        ) : (
          selectedMethods.map((method, index) => (
            <motion.li
              className={`flex flex-row items-center gap-5 py-3 px-4 w-full  rounded-xl hover:bg-background`}
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.45 }}
            >
              <span className="flex-shrink-0">
                <DnDIcon></DnDIcon>
              </span>
              <span className="truncate">{method}</span>
            </motion.li>
          ))
        )}
      </ul>

      <ul className="flex flex-col gap-2 w-52">
        <li className="pb-2 text-sm font-medium text-subtext">AVAILABLE</li>
        {methods.map((method, index) => (
          <li
            className={`flex flex-row items-center gap-5 py-3 px-4 w-full rounded-xl cursor-pointer hover:bg-background
    ${selectedMethods.includes(method) ? "outline-2 outline-stroke" : ""}`}
            key={index}
            onClick={() => handleMethodSelect(method)}
          >
            <span className="flex-shrink-0">
              {selectedMethods.includes(method) ? <RemoveIcon /> : <AddIcon />}
            </span>
            <span className="truncate">{method}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MethodsList;
