import { useEffect, useState } from "react";

const options = [
  { id: 0, name: "Piedra", emoji: "📦", beats: [2, 3] },
  { id: 1, name: "Papel", emoji: "📄", beats: [0] },
  { id: 2, name: "Tijera", emoji: "✂️", beats: [1, 3] },
  { id: 3, name: "Lagarto", emoji: "🦎", beats: [1] },
  { id: 4, name: "Spock", emoji: "🖖", beats: [3, 0] },
];

const getResult = (userChoice, machineChoice) => {
  if (userChoice === machineChoice) {
    return 0;
  }
  if (options[userChoice].beats.includes(machineChoice)) {
    return 1;
  }

  return 2;
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [userMessage, setUserMessage] = useState(null);
  const [machineMessage, setMachineMessage] = useState(null);

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);

  useEffect(() => {
    if (machineChoice !== null) {
      setUserMessage(
        `El bot ha elegido ${options[machineChoice]?.emoji} - ${options[machineChoice]?.name}`
      );
    }
  }, [machineChoice]);

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 5);

    setTimeout(() => {
      setMachineChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 3000);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setMachineChoice(null);
    setUserMessage(null);
    setMachineMessage(null);
    setResult(null);
    setDisabled(false);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <button
              className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              key={option.id}
              disabled={disabled}
              onClick={() => handlePlay(option.id)}
              title={option.name}
            >
              {option.emoji}
            </button>
          ))}
          {userChoice !== null && <p className="text-xl mt-4">{userMessage}</p>}
          {machineChoice !== null && (
            <p className="text-xl mt-4">{machineMessage}</p>
          )}
          {result !== null && (
            <div className="mt-8">
              {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
              {result === 1 && (
                <p className="text-xl mt-4">
                  ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[machineChoice]?.name}
                </p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[machineChoice]?.name}
                </p>
              )}
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
                onClick={reset}
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
