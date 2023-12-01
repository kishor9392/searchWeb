import './index.css'

const Category = props => {
  const {cat, ca} = props
  const {name, categoryId} = cat

  const onTap = () => {
    ca(categoryId)
  }

  return (
    <button type="button" className="cat-btn" onClick={onTap}>
      <p className="cat-p">{name}</p>
    </button>
  )
}

export default Category
