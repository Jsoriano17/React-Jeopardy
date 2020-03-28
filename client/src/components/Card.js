import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    state = {
        cards: [],
    }
    componentDidMount() {
        console.log(this.props)
        const { categoryId } = this.props.category
        axios.get(`/api/categories/${1}/cards`).then(res => {
            this.setState({ cards: res.data, })
        }).catch(err => {
            console.log(err)
        })
    }

    renderCardPoints = () => {
        const { cards } = this.state
        return cards.map(card => (
            <CardStyled>
                <h2>{card.points}</h2>
            </CardStyled>
        ))
    }

    handleClick = () => {
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <Link to='/card' onClick={this.handleClick}>{this.renderCardPoints()}</Link>
                {this.renderCardPoints()}
                {this.renderCardPoints()}
                {this.renderCardPoints()}
                {this.renderCardPoints()}
            </div>

        )
    }
}

const CardStyled = styled.div`
background-color: white;
padding: 20px;
text-align: center;
width: 200px;
height: 100px;
border: 1px solid black;
margin: 20px 0px;
cursor: pointer;
`

const CardText = styled.h1`
font-size: 1vw;
`

