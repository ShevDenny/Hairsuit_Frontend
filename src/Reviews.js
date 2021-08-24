import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const ReviewDiv = styled.div`
    .review-div {

    }


`

function Reviews({review, salonReviews, setSalonReviews, user, salonInfo }) {

    console.log(salonReviews)

    console.log(review.review.id)
   
  

    function removeReview(){   
        const Id = review.review.id
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews/${Id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
          })
          .then(() => {
              let updatedReviews = salonReviews.filter((rev) => rev.review.id !== review.review.id)
              setSalonReviews(updatedReviews)
          }) 
    }
   


    return (
        <ReviewDiv>

            <div classname="reviews-div">
                <p>{review.user.name}</p>
                <img src={`http://localhost:3000/${review.review_photo}`} />
                <p id="review" >{review.review.comment}</p>
                {/* <p id="rating" >{review.rating}</p> */}
                { review.user.id === user.id ?
                <>
                <button onClick={removeReview} ><i class="trash alternate outline icon"></i></button>
                </>
                :
                null
                }
            
            </div>
        
        </ReviewDiv>

    )
}

export default Reviews;