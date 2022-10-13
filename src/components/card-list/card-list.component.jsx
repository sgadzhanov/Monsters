import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => {

    return (
        <div className='card-list'>
            {monsters.map(m => {
                return (
                    <Card monster={m} />
                )
            })}
        </div>
    )
}

export default CardList;