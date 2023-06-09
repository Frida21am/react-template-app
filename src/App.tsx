import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <p>React Start</p>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
