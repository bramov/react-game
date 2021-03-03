import React, {useState, useContext} from "react";

const settingsObject = {
  active: localStorage.getItem('active') || 'false',
  soundValue: localStorage.getItem('soundValue') || '50',
  musicValue: localStorage.getItem('musicValue') || '50',
  regime: localStorage.getItem('regime') || 'classic',
  amount: localStorage.getItem('amount') || '10',
  cards: JSON.parse(localStorage.getItem('cards') || []),
  score: localStorage.getItem('score') || '0',
  bestEasy: localStorage.getItem('bestEasy') || '',
  bestMiddle: localStorage.getItem('bestMiddle') || '',
  bestHard: localStorage.getItem('bestHard') || '',
  totalGames: localStorage.getItem('totalGames') || '0'
}
const Settings = React.createContext({
  active: settingsObject.active,
  soundValue: settingsObject.soundValue,
  musicValue: settingsObject.musicValue,
  regime: settingsObject.regime,
  amount: settingsObject.amount,
  cards: settingsObject.cards,
  score: settingsObject.score,
  bestEasy: settingsObject.bestEasy,
  bestMiddle: settingsObject.bestMiddle,
  bestHard: settingsObject.bestHard,
  totalGames: settingsObject.totalGames
});


export default function SettingsProvider({children}) {
  const [soundValue, setSoundValue] = useState(settingsObject.soundValue);
  const [musicValue, setMusicValue] = useState(settingsObject.musicValue);
  const [regime, setRegime] = useState(settingsObject.regime);
  const [amount, setAmount] = useState(settingsObject.amount);
  const [active, setActive] = useState(settingsObject.active);
  const [cards, setCards] = useState(settingsObject.cards);
  const [bestEasy, setBestEasy] = useState(settingsObject.bestEasy);
  const [bestMiddle, setBestMiddle] = useState(settingsObject.bestMiddle);
  const [bestHard, setBestHard] = useState(settingsObject.bestHard);
  const [totalGames, setTotalGames] = useState(settingsObject.totalGames);

  const value = {
    soundValue, setSoundValue, musicValue, setMusicValue,
    regime, setRegime, amount, setAmount, active, setActive,
    cards, setCards, totalGames, setTotalGames, bestEasy,
    setBestEasy, bestMiddle, setBestMiddle, bestHard, setBestHard
  }
  return <Settings.Provider value={value}>{children}</Settings.Provider>
}

export const useGlobalSettings = () => {
  return useContext(Settings);
}

