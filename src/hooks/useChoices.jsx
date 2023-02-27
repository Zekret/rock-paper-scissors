import { useEffect, useState } from "react";

export const useChoices = ({ options }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
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
      setMachineMessage(
        `El bot ha elegido ${options[machineChoice]?.emoji} - ${options[machineChoice]?.name}`
      );
    }
  }, [machineChoice]);

  return { userChoice, setUserChoice, machineChoice, setMachineChoice, userMessage, setUserMessage, machineMessage, setMachineMessage }
};
