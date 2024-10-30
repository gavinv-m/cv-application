// prettier-ignore
function Input({ placeholder, value, onChange, type = 'text', maxLength = 30}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}

export default function renderInput(placeholder, value, onChange) {
  return (
    <Input placeholder={placeholder} value={value} onChange={onChange}></Input>
  );
}
