import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const ReviewDiv = styled.div`

    .delete {
        background: transparent;
        border: none;
        cursor: pointer;
        float: right
    }
    .review-image {
        float: left;
    }
    #user-name {
        text-align: left;
        font-size: 14px;
        color: gray;
    }


`

function Reviews({review, salonReviews, setSalonReviews, user, salonInfo }) {

    console.log(salonReviews)

    console.log(review)
   
  

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
                <br></br>
                <br></br>
                <p id="user-name">{review.user.name} says...</p>
                <img className="review-image" src={`http://localhost:3000/${review.review_photo}`} width="125" height= "125" />
                <p id="review" >{review.review.comment}</p>
                
                
                {/* <p id="rating" >{review.rating}</p> */}
                { review.user.id === user.id ?
                <>
                <button className="delete" onClick={removeReview} ><i class="trash alternate outline icon"></i></button>
                </>
                :
                null
                }
            
            </div>
        
        </ReviewDiv>

    )
}

export default Reviews;