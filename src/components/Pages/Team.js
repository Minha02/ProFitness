import React from 'react'
import ProfileBox from './ProfileBox';
import styled from 'styled-components';
import women from './assets/women.png'
import men from './assets/men.png'

const TeamContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:20px;
  padding: 20px;
`

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet lorem.',
    image: men,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Lead Developer',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: men,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'Marketing Manager',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image:men,
  },
  {
    id: 4,
    name: 'Emily Brown',
    position: 'Designer',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image:women,
  },

];

const TeamHeader = styled.div`
  color:white;
  text-align:center;
  width:100%;
  font-size: 30px;
`

const Team = () => (
  <div>
  <TeamHeader>
    <h1>Our Team</h1>
    </TeamHeader>
  <TeamContainer>
    {teamMembers.map(member => (
      <ProfileBox 
        key={member.id}
        name = {member.name}
        position={member.position}
        description={member.description}
        image={member.image}
        
      />
    ))}
  </TeamContainer>
  </div>
)

export default Team;
