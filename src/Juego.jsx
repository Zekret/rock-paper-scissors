import { useState } from "react";

const options = [
  { id: 0, name: "Piedra", emoji: "🪨", beats: [2, 3] },
  { id: 1, name: "Papel", emoji: "📄", beats: [0] },
  { id: 2, name: "Tijera", emoji: "✂️", beats: [1, 3] },
  { id: 3, name: "Lagarto", emoji: "🦎", beats: [1] },
  { id: 4, name: "Spock", emoji: "🖖", beats: [3, 0] },
];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
       
      </div>
    </div>
  );
}

export default App;
