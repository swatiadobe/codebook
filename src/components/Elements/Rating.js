export const Rating = ({ rating }) => {
    let ratingArray = Array(5).fill(false);
    //console.log("rat", ratingArray);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }
    // console.log("ra after", ratingArray)
    return (
        <>
            {
                ratingArray.map((value, index) => (
                    value ? <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                        : <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                ))
            }
        </>
    )
}

