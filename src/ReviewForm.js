import React, {useState} from "react";
import { DirectUpload } from 'activestorage';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'

const Form = styled.div` 
    .review-form {
        width: 100%
    }


`




function ReviewForm({salonInfo, user, updateReview, reviews}) {
    const [review, setReview] = useState({
        comment: '',
        // rating: '',
        review_photo: {},
        user_id: '',
        salon_id: ''

    })
    const [errors, setErrors] = useState(null)

 
    // console.log(salonInfo)
    console.log(reviews)


    // console.log(user)

    
    function leaveReview(e){
        e.preventDefault()
    
        const newReview = {
            comment, 
            // rating,
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
        // .then(data => console.log("DATA", data))
        .then(reviewData => uploadFile(review_photo, reviewData))
        
    }
    
    
    const uploadFile = (file, newReview) => {
        const upload = new DirectUpload(file, `http://localhost:3000/rails/active_storage/direct_uploads`)
        upload.create((error, blob) => {
            if (error) {
                setErrors(error)
            } else {
                const token = localStorage.getItem('token')
                fetch(`http://localhost:3000/reviews/${newReview.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({review_photo: blob.signed_id})
                })
                .then(res => res.json())
                .then(result => {
                    updateReview(result)
                    setReview({
                        comment: '',
                        // rating: '',
                        review_photo: {},
                        user_id: '',
                        salon_id: ''
                    })
                    
                })
            }
        })
    }
    


            
      


    function handleChange(e) {
        if(e.target.name === 'review_photo') {
            setReview({...review, [e.target.name]: e.target.files[0]})
        } else {

            setReview({...review, [e.target.name]: e.target.value})
        }       

    }
    
    
    
    const {comment, review_photo} = review


    return (
        <Form> 
        <div className="review-form">
        <br></br>
        <br></br>
        <br></br>
            <form className="ui form" onSubmit={leaveReview} autocomplete="off">
                <input 
                    type="text" 
                    placeholder="Share your experience with us!"
                    name="comment" 
                    value={comment} 
                    onChange={handleChange}
                />
                
           
        
                <input
         
                    type="file"
                    name="review_photo"
                    onChange={handleChange}
                />

                <button className="ui button" type="submit"> Leave a Review</button>
               
                {errors ? errors.map(error => <p>{error}</p>) : null}
            </form> 
              
        </div>
        </Form>
    )
}

export default ReviewForm;
