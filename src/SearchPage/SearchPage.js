import React, { Component } from 'react';
import '../App.css'; 
import { searchBooks, addFavorite, getFavorites } from '../utils/api-utils.js';
import {mungeAllBooks} from "../utils/munge-utils.js";

export default class SearchPage extends Component {
    state = {
        books: [],
        favorites: [],
        search: ''
    }

    componentDidMount = async() => {
        if (this.props.token) await this.doFavoritesFetch();
    }

    doFavoritesFetch = async () => {
        const favorites = await getFavorites(this.props.user.token);

        this.setState({ favorites })
    }

    doSearch = async () => {
        const books = await searchBooks(this.state.search, this.props.token);

        const mungedBooks = books.map(book => mungeAllBooks(book));

        this.setState({ books: mungedBooks });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await this.doSearch();
    }

    handleSearchChange = e => this.setState({ search: e.target.value })

    handleFavoriteClick = async (rawBook) => {
        await addFavorite({
            
        }, this.props.user.token);

        await this.doFavoritesFetch();
    }

    isAFavorite = (book) => {
        if (!this.props.token) return true;

        const isItFavorite = this.state.favorites.find(favorite => favorite.book.key === book.id);

        return Boolean(isItFavorite);
    }

    render() {
        return (
            <div className='container'>
                <h2>Search Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search books by title</button>
                </form>
                <div className="booksList">
                {
                    this.state.books.map((book, i) => 
                    <div key={`${book.title}-${i}`} className="book">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.setting}</p>
                        <p>{book.time_period}</p>
                        <p>{
                        this.isAFavorite(book) 
                            ? '<3' 
                            :  <button onClick={() => this.handleFavoriteClick(book)}>Make favorite</button>}
                        </p>
                    </div>)
                }
                </div>
            </div>)
    }
}
