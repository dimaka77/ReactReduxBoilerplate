import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import * as ACTIONTYPES from '../constants/ActionConstants';

const cache = setupCache({
    maxAge: 15 * 60 * 1000
});

const api = axios.create({
    adapter: cache.adapter
});
