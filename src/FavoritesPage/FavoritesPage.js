import React, { Component } from 'react';
import '../App.css'; 

export default class FavoritesPage extends Component {
    state= {
        favorites: [],
    }
    
    render() {
        return (
            <div className='container'>
                {/* Greeting with user name */}
                <h2>{`${this.props.user.name}'s Favorite Books`}</h2>
                {/* If there are no favorites, tell them to go to search */}
                {!this.state.favorites.length && <p>No favorites. Go to search to add some!</p>}

{/* Way to remove from favorites */}
                {this.state.favorites.map(fave =>
                    <div className='book'>
                        <h3>{fave.title}</h3>
                        <p>{fave.author}</p>
                        <p>{fave.setting}</p>
                        <p>{fave.time_period}</p>
                    </div>
                )}
            </div>
        )
    }
}
