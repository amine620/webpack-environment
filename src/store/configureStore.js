import { configureStore} from '@reduxjs/toolkit';
import isAdmin from './middleware/isAdmin';
import logger from './middleware/logger';
import reducer from './reducer';



export const store=configureStore({
    reducer,
    middleware:[isAdmin]
})