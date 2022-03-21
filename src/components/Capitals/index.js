import {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Capitals = () => {
  const [userInput, setUserInput] = useState(countryAndCapitalsList[0].id)

  const onChangeUserInput = event => {
    setUserInput(event.target.value)
  }

  const getFilteredResults = () => {
    const filteredResults = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === userInput,
    )
    // console.log(filteredResults)
    return filteredResults
  }

  const countryObject = getFilteredResults()

  return (
    <div className="app-container">
      <div className="capitals-container">
        <h1 className="heading">Countries and Capitals</h1>
        <select onChange={onChangeUserInput} className="option">
          {countryAndCapitalsList.map(eachCountry => (
            <option key={eachCountry.id} value={eachCountry.id}>
              {eachCountry.capitalDisplayText}
            </option>
          ))}
        </select>
        <span className="text"> is capital of which country?</span>
        <h1 className="country-name">{countryObject.country}</h1>
      </div>
    </div>
  )
}

export default Capitals
