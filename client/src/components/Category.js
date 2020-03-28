import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

export default class Category extends React.Component {
    state = {
        categories: [],
    }
    componentDidMount() {
        axios.get('/api/categories').then(res => {
            this.setState({ categories: res.data, })
        }).catch(err => {
            console.log(err)
        })
    }

    renderCategories = () => {
        const { categories } = this.state
        return categories.map(category => (
            <CategoryStyle>
                <h1>{category.name}</h1>
            </CategoryStyle>
        ))
    }

    render() {
        return (
            <CategoryCon>
                {this.renderCategories()}
            </CategoryCon>
        )
    }
}

const CategoryStyle = styled.div`
    border: 1px dashed black;
    margin: 20px 10px;
    padding: 5px 20px;
    text-align: center;
    background-color: #34eb9e;
`

const CategoryCon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`
