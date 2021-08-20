import React, {useState} from 'react';

function Reviews({review, salonReviews, setSalonReviews, user, salonInfo }) {
    // const [review, setReview] = useState({
    //     comment: '',
    //     rating: '',
    //     user_id: '',
    //     salon_id: ''

    // })

    console.log(review.user.id)
    console.log(user.id)
    
    function updateReview(){
        // const Id = review.id
        // const token = localStorage.getItem('token')
        // const updatedReview = {
        //     comment, 
        //     rating,
        //     salon_id: salonInfo.id,
        //     user_id: user.id
        // }
        // fetch(`http://localhost:3000/reviews/${Id}`, {
        //     method: 'PATCH',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`
        //     },
        //     body: JSON.stringify(updatedReview)
        //   })
        //   .then(res => res.json())
        //   .then(update => setReview(update))

    }

    function removeReview(){   
        const Id = review.id
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews/${Id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
          })
          .then(() => {
              let updatedReviews = salonReviews.filter((rev) => rev.id !== review.id)
              setSalonReviews(updatedReviews)
          }) 
    }
   


    return (
        <div>
            <p id="review" >{review.comment}</p>
            <p id="rating" >{review.rating}</p>
            { review.user.id === user.id ?
            <>
            <button onClick={updateReview} >Edit Review</button>
            <button onClick={removeReview} >Delete Review</button>
            </>
            :
            null
            }
            
        </div>
        

    )
}

export default Reviews;