import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;  
  flex-direction: column;
`;

const SidebarContainer = styled.div`
  width: 20%;
`;

const MainContent = styled.div`
  width: 80%;
  padding: 1rem;
`;

const Banner = styled.div`
  background: url('path_to_banner_image.jpg') center/cover no-repeat;
`;



const VideoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HomepageMainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  width : 100vw;
`


export { HomeContainer, SidebarContainer, MainContent, Banner, VideoGroup, HomepageMainDiv };