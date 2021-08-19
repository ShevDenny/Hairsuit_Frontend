import React, {useState} from "react"

function ReviewForm({salonInfo, user, setSalonReviews}) {
    const [review, setReview] = useState({
        comment: '',
        rating: '',
        user_id: '',
        salon_id: ''

    })
    const [errors, setErrors] = useState(null)


    console.log(salonInfo)
    console.log(review)


    console.log(user)

    function leaveReview(e){
        e.preventDefault()
    
        const newReview = {
            comment, 
            rating,
            salon_id: salonInfo.id,
            user_id: user.id
        }
        console.log(newReview)
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(reviewData => {
            if(reviewData.errors) {
                setErrors(reviewData.errors)
            } else {
                setSalonReviews(reviewData)
            }
        })

    }


    
    function handleChange(e) {
        setReview({
            ...review, 
            [e.target.name]: e.target.value
        })
    }
    
    
    
    const {comment, rating} = review


    return (
        <div>
            <form className="ui input" onSubmit={leaveReview}>
                <input 
                    type="text" 
                    placeholder="Tell us what you think..."
                    name="comment" 
                    value={comment} 
                    onChange={handleChange}
                />
                <input 
                    type="number"
                    name="rating" 
                    value={rating}
                    onChange={handleChange}
                />

                <input
                    type="submit"
                />
                {errors ? errors.map(error => <div>{error}</div>) : null}
                    {/* insert photo upload  */}
                    {/* insert rating from material ui or semantics*/}
            </form>

        </div>
    )
}

export default ReviewForm;
