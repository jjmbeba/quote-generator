import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Quote from './Quote'

const Home = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((response) => {
    setResults(response.data.data[0]);
})
  },[])


  return (
    <div className='font-raleway py-[31px] px-[100px] w-full'>
        <Header/>
        <Quote quoteData={results} displayAuthor={true}/>
    </div>
  )
}

export default Home