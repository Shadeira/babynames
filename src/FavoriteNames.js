import React from 'react'

export default function FavoriteNames({removeFromFavorites,favoriteNames}) {
  return (
    <div className='favorites-container'>
   <p>Click a name to add to favorites</p>
  
    {
        favoriteNames.map(name=>{
            return <button onClick={()=>removeFromFavorites(name)} className={name.sex==='f' ? 'female-button' : 'male-button'}>{name.name}</button>
        })
    }

    </div>
  )
}