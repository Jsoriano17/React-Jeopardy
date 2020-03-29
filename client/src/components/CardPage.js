import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { CatConsumer } from './Category';


export default class CardPage extends React.Component {
    state = {
        cards: [],
        show: true
    }

    componentDidMount() {
        const { category } = this.props;
        console.log(this.props.state) //just need to figure out how to show props below
        // const { category } = this.props
        axios.get(`/api/categories/${1}/cards/${1}`).then(res => {
            this.setState({ cards: res.data, })
        }).catch(err => {
            console.log(err)
        })
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    renderCard = () => {
        const { cards } = this.state
        if (this.state.show === true) {
            return <CardStyled >
                <h2>{cards.question}</h2>
                <Button color='blue' onClick={this.handleClick}>Answer</Button>
            </CardStyled>
        } else {
            return <CardStyled >
                <h2>{cards.answer}</h2>
                <Button color='blue' onClick={this.handleClick}>Question</Button>
            </CardStyled>

        }
    }

    render() {
        return (
            <>
                <CardCon>
                    {this.renderCard()}
                </CardCon>
                <CardCon>
                    <Button as={Link} to='/'>Home</Button>
                </CardCon>
            </>
        )
    }
}
const CardStyled = styled.div`
background-color: #34eb9e;
padding: 20px;
text-align: center;
width: 500px;
height: 300px;
border: 2px dashed black;
margin: 20px 0px;
`
const CardCon = styled.div`
    display: flex;
    justify-content: center;
    `

// export class ConnectedCategory extends React.Component {
//     render() {
//       return (
//         <CatConsumer> 
//           { cat => 
//             <CardPage { ...this.props } category={cat} />
//           }
//         </CatConsumer>
//       )
//     }
//   }

//   export default withRouter(ConnectedCategory);

