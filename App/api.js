import axios from 'axios';
import { useState } from 'react';

const api = axios.create({
baseURL: 'http://10.10.9.8:4200',
});
export default api;
