import React, {useState, useContext} from "react";

const Settings = React.createContext({
  soundValue: '50',
  musicValue: '50',
  regime: 'classic',
  amount: '10',
});


export default function SettingsProvider({children}) {
  const [soundValue, setSoundValue] = useState('50');
  const [musicValue, setMusicValue] = useState('50');
  const [regime, setRegime] = useState('classic');
  const [amount, setAmount] = useState('10');

  const value = {
    soundValue, setSoundValue, musicValue, setMusicValue,
    regime, setRegime, amount, setAmount
  }
  return <Settings.Provider value={value}>{children}</Settings.Provider>
}

export const useGlobalSettings = () => {
  return useContext(Settings);
}

