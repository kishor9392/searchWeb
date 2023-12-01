import Category from '../Category'
import Rating from '../Rating'

import './index.css'

const FiltersGroup = props => {
  const {rating, category, updateName, updateC, updateR, reset} = props

  const c = id => {
    updateC(id)
  }

  const r = id => {
    updateR(id)
  }

  const on = () => {
    reset()
  }

  return (
    <div className="filters-group-container">
      <div className="s-con">
        <input type="search" className="search" placeholder="Search" />
      </div>

      <div className="div-c">
        <h1 className="cat-h">Category</h1>

        {category.map(each => (
          <Category key={each.id} cat={each} ca={c} />
        ))}
      </div>

      <div className="div-c">
        <h1 className="cat-h">Rating</h1>

        {rating.map(each => (
          <Rating key={each.ratingId} rating={each} ra={r} />
        ))}
      </div>

      <button type="button" className="f-btn" onClick={on}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
