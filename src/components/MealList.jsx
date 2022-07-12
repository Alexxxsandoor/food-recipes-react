import { Meal } from './Meal'
import { useNavigate } from 'react-router-dom'


export function MealList({ meals }) {
	let navigate = useNavigate();



	return (
		<>
			<button className='btn' onClick={() => navigate(-1)}>Back</button>
			<div className="list">

				{
					meals.map(el => (
						<Meal key={el.idMeal} {...el} />
					))
				}
			</div>
		</>
	)
}