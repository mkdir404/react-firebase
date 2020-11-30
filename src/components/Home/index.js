import React from 'react';
import ReactHLS from 'react-hls';

import { withAuthorization } from '../Session';
/**
 *
 *
 *  <ReactHLS url={"http://3.91.92.152:8080/hls/cam175.m3u8"} />
 *  <ReactHLS url={"http://3.91.92.152:8080/hls/cam193.m3u8"} />
 *  <ReactHLS url={"http://3.91.92.152:8080/hls/cam170.m3u8"} />
    <ReactHLS url={"http://3.91.92.152:8080/hls/cam173.m3u8"} />
      http://3.91.92.152:8080/hls/cam164.m3u8
      http://3.91.92.152:8080/hls/cam191.m3u8
      http://3.91.92.152:8080/hls/cam182.m3u8
      http://3.91.92.152:8080/hls/cam177.m3u8
      http://3.91.92.152:8080/hls/cam198.m3u8
      http://34.235.144.27:8080/hls/camera-6.m3u8


      http://34.235.144.27:8080/hls/cam-p-01.m3u8

      <ReactHLS url={"http://34.235.144.27:8080/hls/hddl1.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam198.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam198.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam191.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam182.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam190.m3u8"} />
      <ReactHLS url={"http://3.91.92.152:8080/hls/cam177.m3u8"} />

 * */

const HomePage = () => (

  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <ReactHLS
        url={"http://34.235.144.27:8080/hls/camp01.m3u8"}
        autoplay={true}
        controls={true}
        hlsConfig={{
              autoStartLoad: true,
              startPosition: -1,
              debug: false,
          }}
          config={{
              file: {
                forceVideo: true,
          }}}
       />
  </div>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
