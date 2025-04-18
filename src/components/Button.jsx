import React from 'react'
import { useState } from 'react'

const Button = () => {
   const[clickCount,setClickCount] =useState(0);
  return (
    <div className='flex flex-col'>
    <div className='flex'>
        <p className='bg-blue-100 text-left m-2 p-2 rounded-3xl'>The most iconic and recognizable structure in Paris, the Eiffel Tower is the tallest and most frequented attraction in all of France. </p>
        <button 
        onClick={() => setClickCount(clickCount + 1)} 
        className='text-5xl wid p-2 m-2 rounded bg-blue-600 rounded-5xl hover:bg-green-700' > +</button>

    
        </div>
        {clickCount === 1 && (
        <p className='m-4 bg-yellow-200 p-3 rounded-xl '>
          Hii Welcome to the Eiffel Tower!
        </p>
      )}

{clickCount === 2 && (
        <img className='' src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="f_pic" />
        
      )}


{clickCount === 3&& (
        <img className='' src="https://cms-b-assets.familysearch.org/dims4/default/23615bc/2147483647/strip/true/crop/750x500+0+0/resize/1240x827!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F15%2Fba%2F62f42774dc0116cbeb2138195ffb%2Fyoung-girl-with-french-national-flag.jpg" />
        
      )}

{clickCount === 4&& (
    <div className='bg-pink-400 m-4 p-4 rounded-2xl'>
       <h1 className='text-4xl  text-fuchsia-800'>A Little Story About France</h1>
       <p className='align-middle text-2xl'>Once upon a time in Europe, there was a charming country called France. People from all over the world dreamed of visiting its capital, Paris, known as the "City of Light".

       Paris had narrow streets filled with cozy cafés, artists painting by the River Seine, and the magical Eiffel Tower, sparkling every night like a jewel in the sky.
       
       But France is not just Paris! There are peaceful lavender fields in Provence, snowy mountains in the Alps, castles in the Loire Valley, and sunny beaches along the French Riviera.
       
       France also has a rich history  from kings and queens in grand palaces like Versailles, to brave revolutionaries who changed the country forever during the French Revolution 
       
       And of course, France is the home of delicious food! 
       Think of warm croissants, creamy cheese, sweet macarons, and beautiful meals shared with love. French people take food and wine seriously it's not just eating, it's an experience.
       
       Today, France is a country that blends old charm with modern life. Whether you're walking through a vineyard, climbing a mountain, or dancing in a summer festival</p>
       </div> 
      )}



        </div>
  )
}

export default Button
