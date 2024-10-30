export default function Input({
  placeholder,
  value,
  onChange,
  type = 'text',
  maxLength = 30,
}) {
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
