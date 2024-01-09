import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';


type PageProps = {
  page?: string | "home";
}

const Card = styled.div<PageProps>`
  width: ${props => {
    if (props.page === "home") return '300px';
    return '100vw';
  }};
  hight: 200px;
  margin: 10px;
  display: flex;
  flex-direction: ${props => {
    if (props.page === "home") return 'column';
    if (props.page === "trending") return 'row';
    return 'column';
  }};
`;

const ImageCard = styled.img<PageProps>`
  width: 300px;  
  height: 200px;
  object-fit: cover;
  margin-right: ${props => {
    if (props.page === "home") return '0px';
    if (props.page === "trending") return '10px';
    return '0px';
  }};
`;

const formatDate = (date: string) => {
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: false });
  return timeAgo.replace(/almost|over/gi, '').trim();
};

const VideoCard = ({ video, onClick , page} : any) => (
  <Card onClick={onClick} page={page}>
    <ImageCard src={video.thumbnail_url} alt={video.title} page={page}/>
    <div>
      <h3>{video.title}</h3>
      <p>{video.channel.name}</p>
      <p>{video.view_count} views • {formatDate(video.published_at)}</p>
    </div>
  </Card>
);

export default VideoCard;
