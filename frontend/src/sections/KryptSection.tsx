import { useEffect, useState } from "react";
import InputText from "../components/InputText";
import { axiosAPI } from "../api/axios";

interface KryptSectionProps {
  selectedMethods: string[];
}

function KryptSection({ selectedMethods }: KryptSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [ouputValue, setOuputValue] = useState("");

  useEffect(() => {
    const encryptText = async () => {
      if (inputValue && selectedMethods.length > 0) {
        try {
          const response = await axiosAPI.post("/transform", {
            text: inputValue,
            methods: selectedMethods,
          });
          setOuputValue(response.data.result);
        } catch (error) {
          console.log("Error encrypting text ", error);
          setOuputValue("Error encrypting text");
        }
      } else {
        setOuputValue("Select a method and type to enkrypt");
      }
    };

    encryptText();
  }, [inputValue, selectedMethods]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <section className="flex flex-col py-24 gap-8 px-12 lg:py-12 lg:max-w-[920px]  ">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-semibold">Welcome to Rekrypt</h1>
        <p className="text-sm text-subtext">
          A text encryption tool that allows users to input text and apply
          multiple encryption algorithms in a specified order. Users can choose
          from various hashing algorithms (such as SHA-1, SHA-256, MD5, etc.)
          and combine them sequentially to generate an unique encrypted outputs.
        </p>
      </div>

      <div className="flex flex-col gap-7 ">
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
