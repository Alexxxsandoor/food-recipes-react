import { Link } from 'react-router-dom'

export function CategoryItem(props) {

	const { strCategoryThumb, strCategoryDescription, strCategory } = props

	return (

		<div className="card">
			<div className="list card-image">
				<img src={strCategoryThumb} alt={strCategory} />


			</div>
			<div className="card-content">
				<span className="card-title">{strCategory}</span>
				<p>{strCategoryDescription.slice(0, 90)}...</p>

			</div>
			<div className="card-action">
				<Link to={`./category/${strCategory}`} className="btn">WATCH {strCategory}</Link>
			</div>
		</div>

	)
}