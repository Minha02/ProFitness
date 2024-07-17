import React from 'react'
import styled from 'styled-components';

const BoxContainer = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding:20px;
    margin: 10px;
    width: 250px;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
`;

const Name = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 5px;
`;

const Position = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1rem;
`

const ProfileBox = ({name,position,description,image}) => (
    <BoxContainer>
        <ProfileImage src={image} alt={name} />
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Description>{description}</Description>
    </BoxContainer>
)
  
export default ProfileBox
