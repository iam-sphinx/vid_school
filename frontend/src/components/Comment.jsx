

import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const channelResponse = await axios.get(`https://vid-school-clipher-project.onrender.com/api/users/find/${comment.userId}`);
      setChannel(channelResponse.data);
    };
    fetchComment();
  }, [comment.userId]);
  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name}
        </Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
