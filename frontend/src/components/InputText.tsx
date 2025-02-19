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
  <div className="max-w-[850px] h-[250px] px-5 py-5 border-stroke border-2 rounded-xl flex flex-col gap-3">
    <label className="text-xs text-subtext font-semibold">{label}</label>
    <textarea
      className="scroll-bar-custom resize-none field-sizing-content focus:outline-hidden text-subtext text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

export default InputText;
