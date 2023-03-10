import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({tags}) => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () =>{
      const response = await axios.get(`https://vid-school-clipher-project.onrender.com/api/videos/tags?tags=${tags}`);
      setVideos(response.data);
    };
    fetchVideos();
  },[tags])
  return (
    <Container>
    {videos.map((video)=>(<Card key={video._id} type="sm" video={video}/>)

    )}

    </Container>
  )
}

export default Recommendation