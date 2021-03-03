import React, {useState, useEffect} from "react";


const levelDetection = (level) => {
  switch(level) {
    case '10': return 'Легкий';
    case '20': return 'Средний';
    case '30': return 'Сложный';
    default: return 'Непонятный какой-то'
  }
}

const Table = () => {
  const [filter, setFilter] = useState('all');
  const [rating, setRating] = useState([]);
  useEffect(() => {
    downloadData();
  }, [filter])
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }
  const downloadData = (e) => {
    fetch(`/loadScore?mode=${filter}`)
      .then(res => res.json())
      .then(result => handleData(result))
  }
  const handleData = (data) => {
    return (data.length >= 1) ?
    setRating(data.sort((a, b) => Number(a.score) - Number(b.score))) :
    setRating([]);
  }

  return (
    <table className="left">
      <thead>
      <tr>
        <th>Имя</th>
        <th>
          <label>Режим</label>
          <select onChange={handleFilterChange} value={filter} className="browser-default">
            <option value="all">Все</option>
            <option value="10">Легкий</option>
            <option value="20">Средний</option>
            <option value="30">Сложный</option>
          </select></th>
        <th>Баллы</th>
      </tr>
      </thead>

      <tbody>
      {rating.map(el => {
        return (
          <tr>
            <td>{el.name}</td>
            <td>
              {levelDetection(el.amount)}
            </td>
            <td>{el.score}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default Table;
