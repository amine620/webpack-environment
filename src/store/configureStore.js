import { configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import func from './middleware/func';
import isAdmin from './middleware/isAdmin';
import logger from './middleware/logger';
import reducer from './reducer';



export const store=configureStore({
    reducer,
    middleware:[
        ...getDefaultMiddleware(),
        logger,
    ]
})