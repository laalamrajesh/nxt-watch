import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import Loader from '../Loader/Loader';
import VideoCard from '../VideoCard/VideoCard';
import NoResults from '../NoResults/NoResults';
import ErrorComponent from '../Error/Error';
import Sidebar from '../SideBar/SideBar';
import SearchBar from '../SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../store/storeContext';
import { HomeContainer, SidebarContainer, MainContent, Banner,  VideoGroup, HomepageMainDiv} from './styledComponents';
import Header from '../Header/Header';


const Trending = observer(() => {
  const store: any = useContext(StoreContext);
  console.log(store)
  const { videoStore } = store;
  const history = useHistory();

  useEffect(() => {
    videoStore.fetchTrendingVideos();
  }, [videoStore]);

  if (videoStore.isLoading) {
    return <Loader />;
  }

  const handleThemeToggle = () => {
    
  };

  const handleLogout = () => {
   
  };

  if (videoStore.errorMsg) {
    return <ErrorComponent message={videoStore.errorMsg} retry={videoStore.fetchTrendingVideos} />;
  }

  return (
    <HomeContainer>
      <Header onThemeToggle={handleThemeToggle} onLogout={handleLogout} theme="light"/>
      <HomepageMainDiv>
      <Sidebar onNavigate={(path: string) => history.push(path)}  />
      <MainContent>
      

        <VideoGroup>

        {videoStore.videos.length > 0 ? (
          videoStore.videos.map((video: any) => (
            <VideoCard key={video.id} video={video} page="trending" onClick={() => history.push(`/videos/${video.id}`)} />
          ))
        ) : (
          <NoResults />
        )}
        </VideoGroup>
        
      </MainContent>
      </HomepageMainDiv>
    </HomeContainer>
  );
});

export default Trending;
