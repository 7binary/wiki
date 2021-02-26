### Socket.io vs WebSocket
***
+ Reliable (Engine-io first established long-pool connection, then try to use Websocket)
+ Reconnect (heartbeating ping/pong)
+ Binary streaming (blob, audio, video)
+ Multi-room (mulptiplexing opened windows)
+ Blocker (Proxy, Load Balancers, Anti-Virus, Firewall)
+ WS used only as transport layer
