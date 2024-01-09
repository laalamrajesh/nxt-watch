import {createContext} from 'react';
import VideoStore from './VideoStore';

export const StoreContext = createContext({} as any);

export const storeObject = {
    videoStore: new VideoStore(),
}
