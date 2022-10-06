import { Component } from "react";
import './card-list.styles.css'

class CardList extends Component {

    render() {
        const { monsters, className } = this.props;

        return (
            <div className={className}>
                {monsters.map(m => {
                    const { id, name, email } = m;
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`monster ${name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;