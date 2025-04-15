interface InputTextProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
  }
  
  const InputText: React.FC<InputTextProps> = ({
    label,
    value,
    placeholder,
    onChange,
    readOnly = false,
  }) => (
    <div
      className="flex flex-col gap-3 px-5 py-5 border-2 border-stroke rounded-xl h-full"
    >
      <label className="text-xs font-semibold text-subtext">{label}</label>
      <textarea
        className="h-full resize-none scroll-bar-custom focus:outline-hidden text-subtext"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
  
  export default InputText;