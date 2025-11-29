export default function Button({ variant = "primary", children, ...props }) {
  const styles = {
    primary: "bg-blue-600 text-white px-4 py-2 rounded",
    secondary: "bg-gray-600 text-white px-4 py-2 rounded",
    danger: "bg-red-600 text-white px-4 py-2 rounded"
  };

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
}
