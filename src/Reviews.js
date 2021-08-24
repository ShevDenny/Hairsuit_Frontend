import React, {useEffect, useState} from 'react';

function Reviews({review, salonReviews, setSalonReviews, user, salonInfo }) {
    const [currentReviews, setCurrentReviews] = useState([])

  useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews/${review.id}`, { 
            headers: { 
                'Authorization': `Bearer ' ${token}`,
            },
        })
        .then(res => res.json())
        // .then(console.log)
        .then(reviewData => setCurrentReviews(reviewData))

    },[])

    console.log(currentReviews)

    // const revDisplay = currentReviews.map(rev => {
    //     return (
    //         <div>
    //             <p>{review.user.name}</p>
    //             <img src={`http://localhost:3000/${rev.review_photo}`} />
    //             <p id="review" >{review.comment}</p>
    //             <p id="rating" >{review.rating}</p>
    //         </div>
    //     )
    // })

    // console.log(currentReview)

    // console.log(review)


    // console.log(user.id)
    
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
            <p>{review.user.name}</p>
            {/* <img src={`http://localhost:3000/${currentReview.review_photo}`} /> */}
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