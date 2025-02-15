import { useState } from "react";
import InputText from "../components/InputText";

function KryptSection() {
  const [inputValue, setInputValue] = useState("");
  const [ouputValue, setOuputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setOuputValue(newValue.toUpperCase());
  };

  return (
    <section className="py-8 px-10 bg-main flex flex-col gap-8">
      <div className=" flex flex-col gap-2">
        <h2 className="font-semibold">Welcome!</h2>
        <p className="text-subtext text-sm">
          A text encryption tool that allows users to input text and apply
          multiple encryption algorithms in a specified order. Users can choose
          from various hashing algorithms (such as SHA-256, MD5, etc.) and
          combine them sequentially to generate unique encrypted outputs.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <InputText
          label="> ENTRADA"
          value={inputValue}
          placeholder="Type here"
          onChange={handleChange}
        ></InputText>
        <InputText
          label="> SALIDA"
          value={ouputValue}
          placeholder="Waiting..."
          readOnly
        ></InputText>
      </div>
    </section>
  );
}

export default KryptSection;
