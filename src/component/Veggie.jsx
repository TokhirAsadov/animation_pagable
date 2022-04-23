import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import styled from "styled-components";

const Veggie = () => {

    const [veggie,setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[])

    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");

        if(check){
            setVeggie(JSON.parse(check));
        }else {
            const api = await
                fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
                );
            const data = await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }

    }

    return (
        <div>
            <Wrapper>
                <h5 style={{fontWeight:500}}>Our Vegetarian Picks</h5>

                <Splide options={{
                    perPage:3,
                    arrows:false,
                    pagination:false,
                    drag:'free',
                    gap:'2rem'
                }}>
                    {
                        veggie.map( recipe => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Title>{recipe.title}</Title>
                                        <Img className="splideSlide" src={recipe.image} alt={recipe.title}/>
                                        <Gradient />
                                    </Card>
                                </SplideSlide>
                            ) ;
                        })
                    }
                </Splide>
            </Wrapper>
        </div>
    );
};


const Wrapper = styled.div`
    margin:1.5rem 0rem!important;
`;

const Card = styled.div`
    min-height:12rem;
    overflow:hidden;
    border-radius:2rem;
    margin:2rem 0rem 0.2rem;
    display: flex;
    flex-direction: column;
    position:relative;
`;

const Title = styled.p`
    width:100%;
    height:40%;
    font-weight:600;
    font-size:1rem;
    text-align:center;
    position:absolute;
    left:50%;
    bottom:0%;
    color:white;
    z-index:100;
    transform:translate(-50%,0%);
`

const Img = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    object-fit: cover;
    display:block;
`;

const Gradient = styled.div`
    width:100%;
    height:100%;
    z-index:3;
    position:absolute;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Veggie;