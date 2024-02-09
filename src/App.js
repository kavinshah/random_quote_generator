import React, {useState} from 'react';
import './App.css';

const quotes = [{quote:'Wisdom, when spoken aloud, always sounds a little foolish. Perhaps that\'s because when we hear something that makes sense to us, we think we already know it. But often we don\'t.',
author: 'Herman Hesse'},
{quote:'America owes most of its social prejudices to the exaggerated religious opinions of the different sects which were so instrumental in establishing the colonies.',
author: 'James Fenimore Cooper'},
{quote:'We are here and it is now: further than that all human knowledge is moonshine.',
author: 'H. L. Mencken, 1880 - 1956'},
{quote:'Every right implies a responsibility; Every opportunity, an obligation, Every possession, a duty.',
author: 'John D. Rockafeller'},
{quote:'Success comes from keeping the ears open and the mouth closed.',
author: 'John D. Rockafeller'}]

function NewQuote(){
	const [counter, setCounter] = useState(0);
	const handleCounter = (event) => {
		setCounter(Math.floor(Math.random()*5));
	}
	let quote = quotes[counter].quote;
	let author = quotes[counter].author;
	return (
      <div id='quote-box' className='quoteCard'>
        <QuoteCard quote={quote} author={author} />
        <NewQuoteButton id='new-quote' handleCounter={handleCounter} />
		<Tweet quote={quote} author={author} />
      </div>
    ); 
}

function NewQuoteButton({id, handleCounter}){
    return (
      <div>
        <button className='button' id={id} onClick={handleCounter}>New Quote</button>
      </div>
    );
}

function QuoteCard({quote, author}){
	return <>
			<p id='text'><i>{quote}</i></p>
			<p id='author'>{'-' + author}</p>		
		</>
}

function Tweet({quote, author}){
	return (
		<div className='tweet'>
			<a id='tweet-quote' href={'https://twitter.com/intent/tweet?text='+ quote+'%0A -'+author}><i>Tweet</i></a>
		</div>
	);
}

export default NewQuote;
