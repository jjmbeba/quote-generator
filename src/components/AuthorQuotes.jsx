import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header';
import axios from 'axios';
import Quote from './Quote';

const AuthorQuotes = () => {

    let {author} = useParams();
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`).then((response) => {
            setQuotes(response.data.data);
        })
    },[]);

  return (
    <div className='font-raleway py-[31px] px-[100px] w-full'>
        <Header/>
        <h2 className='text-[36px] leading-[42px] text-[#333333] font-bold mt-[48px]'>{author}</h2>
        <div className='flex items-center justify-center flex-col'>
            {quotes.map((quote) => (
                <Quote quoteData={quote} displayAuthor={false}/>
            ))}
        </div>
    </div>
  )
}

export default AuthorQuotes