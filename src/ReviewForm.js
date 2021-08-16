import React, {useState} from "react"

export default function ReviewForm() {
    const [review, setReview]= useState('')

    function leaveReview(e){
        e.preventDefault()
        console.log(review)
        fetch(`/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review})
        })
        .then(res => res.json())
        .then(console.log)

    }

    function updateReview(){

    }

    function deleteReview(){

    }

    function handleChange(e){
        setReview(e.target.value)
        console.log(review)
    }




    return (
        <div>
            <form className="review-form" onSubmit={leaveReview}>
                <input type="text" placeholder="Tell us what you think..." value={review} onChange={handleChange}></input>
                <input type="submit" />
            </form>

        </div>
    )
}
