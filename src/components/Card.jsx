export default function Card({ children }) {
  return (
    <div className="p-4 shadow-md bg-white dark:bg-gray-800 rounded-lg">
      {children}
    </div>
  );
}
