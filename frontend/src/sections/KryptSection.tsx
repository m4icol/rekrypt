import { useState } from "react";
import InputText from "../components/InputText";
import { axiosAPI } from "../api/axios";

interface KryptSectionProps {
  selectedMethods: string[];
}

function KryptSection({ selectedMethods }: KryptSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [ouputValue, setOuputValue] = useState("");

  const handleChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (newValue && selectedMethods.length > 0) {
      try {
        const response = await axiosAPI.post("/transform", {
          text: newValue,
          methods: selectedMethods,
        });
        setOuputValue(response.data.result);
      } catch (error) {
        console.log("Error encrypting text ", error);
        setOuputValue("Error encrypting text");
      }
    } else {
      setOuputValue("Select a method to enkrypt");
    }
  };

  return (
    <section className="flex flex-col gap-8 py-10 px-14">
      <div className="flex flex-col gap-2 ">
        <h2 className="font-semibold">Welcome!</h2>
        <p className="text-sm text-subtext">
          A text encryption tool that allows users to input text and apply
          multiple encryption algorithms in a specified order. Users can choose
          from various hashing algorithms (such as SHA-1, SHA-256, MD5, etc.)
          and combine them sequentially to generate an unique encrypted outputs.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-200">
        <InputText
          label="> INPUT"
          value={inputValue}
          placeholder="Type here"
          onChange={handleChange}
        ></InputText>
        <InputText
          label="> OUTPUT"
          value={ouputValue}
          placeholder="Waiting..."
          readOnly
        ></InputText>
      </div>
    </section>
  );
}

export default KryptSection;
