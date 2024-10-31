export default function AddButton({ section, add }) {
  return (
    <button
      onClick={() => {
        add(section);
      }}
    >
      +
    </button>
  );
}
