import { makeAutoObservable } from "mobx";

class VideoStore {
  videos = [];
  isLoading = false;
  errorMsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchVideos = async (searchQuery = "") => {
    this.isLoading = true;
    this.errorMsg = "";
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {

          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU` // Replace with actual JWT token
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      this.videos = data.videos;
    } catch (error: any) {
      this.errorMsg = error.message;
    } finally {
      this.isLoading = false;
    }
  }

  fetchTrendingVideos = async () => {
    this.isLoading = true;
    this.errorMsg = "";
    const url = `https://apis.ccbp.in/videos/trending`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
  
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU` // Replace with actual JWT token
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch trending videos');
      }
      const data = await response.json();
      this.videos = data.videos;
    } catch (error: any) {
      this.errorMsg = error.message;
    } finally {
      this.isLoading = false;
    }
  }
}



export default VideoStore;
