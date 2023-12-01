import './index.css'

const Rating = props => {
  const {rating, ra} = props
  const {imageUrl, ratingId} = rating

  const onPress = () => {
    ra(ratingId)
  }

  return (
    <button type="button" className="r-btn" onClick={onPress}>
      <div className="div-r">
        <img src={imageUrl} alt={`rating ${ratingId}`} className="r-img" />
        <p className="r-p">& up</p>
      </div>
    </button>
  )
}

export default Rating
