const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element,them play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.desabled = true; 
    // Start Picture and Picture 
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.desabled = false;
})



// On Load
selectMediaStream();