

function Reviews({review}) {

    function handleUpdate(){

    }

    function handleDelete(){

    }


    return (
        <div>
            <p id="review" >{review.comment}</p>
            <p id="rating" >{review.rating}</p>
            <button onClick={handleUpdate}>Edit Review</button>
            <button onClick={handleDelete}>Delet Review</button>
            
        </div>
        

    )
}

export default Reviews;