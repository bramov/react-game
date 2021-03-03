import React, {useState, useContext} from "react";

const settingsObject = {
  active: localStorage.getItem('active') || 'false',
  soundValue: localStorage.getItem('soundValue') || '50',
  musicValue: localStorage.getItem('musicValue') || '50',
  regime: localStorage.getItem('regime') || 'classic',
  amount: localStorage.getItem('amount') || '10',
  cards: JSON.parse(localStorage.getItem('cards' || null))
}
const Settings = React.createContext({
  active: settingsObject.active,
  soundValue: settingsObject.soundValue,
  musicValue: settingsObject.musicValue,
  regime: settingsObject.regime,
  amount: settingsObject.amount,
  cards: settingsObject.cards
});


export default function SettingsProvider({children}) {
  const [soundValue, setSoundValue] = useState(settingsObject.soundValue);
  const [musicValue, setMusicValue] = useState(settingsObject.musicValue);
  const [regime, setRegime] = useState(settingsObject.regime);
  const [amount, setAmount] = useState(settingsObject.amount);
  const [active, setActive] = useState(settingsObject.active);
  const [cards, setCards] = useState(settingsObject.cards);

  const value = {
    soundValue, setSoundValue, musicValue, setMusicValue,
    regime, setRegime, amount, setAmount, active, setActive,
    cards, setCards
  }
  return <Settings.Provider value={value}>{children}</Settings.Provider>
}

export const useGlobalSettings = () => {
  return useContext(Settings);
}

