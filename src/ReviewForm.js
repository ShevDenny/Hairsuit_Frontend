import React, {useState} from "react"
import { DirectUpload } from 'activestorage';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const labels = {
    0.5: 'Terrible',
    1: 'Terrible+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });


function ReviewForm({salonInfo, user, updateReview, reviews}) {
    const [review, setReview] = useState({
        comment: '',
        // rating: '',
        review_photo: {},
        user_id: '',
        salon_id: ''

    })
    const [errors, setErrors] = useState(null)

    // const [value, setValue] = ;
    const [hover, setHover] = useState(-1);
    const classes = useStyles();


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
                console.log(error)
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
        <div className={classes.root}>
            
            <form className="ui input" onSubmit={leaveReview}>
                <input 
                    type="text" 
                    placeholder="Tell us what you think..."
                    name="comment" 
                    value={comment} 
                    onChange={handleChange}
                />
                
                {/* <input 
                    type="number"
                    // className="ui star rating"
                    name="rating" 
                    value={rating}
                    onChange={handleChange}
                /> */}
              
               
                {/* <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    onChange={handleChange}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                />
                {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>} */}
        
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
