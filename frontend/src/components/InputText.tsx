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
  <div className="h-[250px] px-5 py-5 border-stroke border-2 rounded-xl flex flex-col gap-3">
    <label className="text-xs font-semibold text-subtext">{label}</label>
    <textarea
      className="text-sm resize-none scroll-bar-custom field-sizing-content focus:outline-hidden text-subtext"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

export default InputText;
