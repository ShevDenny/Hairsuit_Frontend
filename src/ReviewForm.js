import React, {useState} from "react"
import { DirectUpload } from 'activestorage';

function ReviewForm({salonInfo, user, setSalonReviews, salonReviews}) {
    const [review, setReview] = useState({
        comment: '',
        rating: '',
        review_photo: '',
        user_id: '',
        salon_id: ''

    })
    const [errors, setErrors] = useState(null)


    console.log(salonInfo)
    console.log(salonReviews)


    // console.log(user)

    const updateReview = (result) => {
        setSalonReviews([
            ...salonReviews, result
        ])
        setReview({
            comment: '',
            rating: '',
            review_photo: '',
            user_id: '',
            salon_id: ''
        })
    }
    
   const uploadFile = (file, newReview) => {
        const upload = new DirectUpload(file, `http://localhost:3000/rails/active_storage/direct_uploads`)
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {
                const token = localStorage.getItem('token')
                fetch(`http://localhost:3000/reviews/${newReview.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({review_photo: blob.signed_id})
                })
                .then(res => res.json())
                // .then(console.log)
                .then(result => updateReview(result))
            }
        })
    }
    
    function leaveReview(e){
        e.preventDefault()
    
        const newReview = {
            comment, 
            rating,
            review_photo,
            salon_id: salonInfo.id,
            user_id: user.id
        }
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        // .then(console.log)
        .then(reviewData => uploadFile(review_photo, reviewData))
        
    }
            
            // if (reviewData.errors) {
            //     setErrors(reviewData.errors)
            // } else {
                // setSalonReviews([...salonReviews, reviewData])
                // setReview({
                //     comment: '',
                //     rating: '',
                //     review_photo: '',
                //     user_id: '',
                //     salon_id: ''
            // })
            // }
            
      


    function handleChange(e) {
        if(e.target.name === 'review_photo') {
            setReview({...review, [e.target.name]: e.target.files[0]})
        } else {

            setReview({...review, [e.target.name]: e.target.value})
        }       

    }
    
    
    
    const {comment, rating, review_photo} = review


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
                    type="file"
                    name="review_photo"
                    onChange={handleChange}
                />

                <input
                    type="submit"
                />
                {errors ? errors.map(error => <p>{error}</p>) : null}
                    {/* insert photo upload  */}
                    {/* insert rating from material ui or semantics*/}
            </form>

        </div>
    )
}

export default ReviewForm;
