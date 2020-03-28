import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Card from './Card'

const CatContext = React.createContext();
export const CatConsumer = CatContext.Consumer;

export default class Category extends React.Component {
    state = {
        categories: [],
    }
    componentDidMount() {
        axios.get('/api/categories').then(res => {
            this.setState({ categories: res.data, });
        }).catch(err => {
            console.log(err)
        })
    }

    renderCategories = () => {
        const { categories } = this.state
        return categories.map(category => (
            <ColumnCon key={`category${category.id}`}>
                <CategoryStyle>
                    <h1>{category.name}</h1>
                    <Card categoryId={category.id} />
                </CategoryStyle>
            </ColumnCon>
        ))
    }

    render() {
        return (
                <CategoryCon>
                    {this.renderCategories()}
                </CategoryCon>
            //     {/* <CatContext.Provider value={{
            //         ...this.state,
            //     }}>
            //         {this.props.children}
            //     </CatContext.Provider>
            // </> */}
        )
    }
}


const CategoryStyle = styled.div`
    border: 2px dashed black;
    margin: 20px 10px;
    padding: 5px 15px;
    width: 230px;
    text-align: center;
    background-color: #34eb9e;
`

const CategoryCon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`
const ColumnCon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
