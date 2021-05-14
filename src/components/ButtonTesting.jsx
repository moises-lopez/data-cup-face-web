import { Button } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

const URL = "http://localhost:5000/api/";

const ButtonTesting = () => {

    const handleTestCall = async () => {
        const constraints = {
            video: true
        }
        /* Get image from camera */
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            let videoTrack = stream.getVideoTracks()[0];
            const imageCapture = new ImageCapture(videoTrack);
            imageCapture.grabFrame().then(async function(imageBitmap) {
        /* Get image from camera */

                /* Change to blob */
                console.log(imageBitmap);
                let canvas = document.createElement('canvas');
                canvas.width = imageBitmap.width;
                canvas.height = imageBitmap.height;
                let context = canvas.getContext('2d');
                context.drawImage(imageBitmap, 0, 0);

                canvas.toBlob(async (blob) => {
                    const params = {
                        photo: blob
                    }
                    console.log(params)
                /* Change to blob */
                    const { data } = await axios.post( URL + "face/face", params )
                })
            });
        }).catch(function(err) {
            console.log("Something happened cam not working")
        });


        
    };

// get video

    return <Button onClick={() => handleTestCall()} color="primary">TEST</Button>;
    
}
 
export default ButtonTesting;