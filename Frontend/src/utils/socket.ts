import { io } from "socket.io-client";

const socket = io("https://newsfeed-pnsd.onrender.com"); 

export default socket;
