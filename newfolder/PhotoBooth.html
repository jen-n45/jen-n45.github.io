<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <link rel="stylesheet" href="../Unnamed Site 2/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Photo Booth</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            margin: 10px;
            text-align: center;
            font-family: blithe, sans-serif;
            font-size: 80px;
            background-color: #D0BA98;
            overflow: auto;
        }
        h1 {
            color: #33476B;
            margin-top: 80px;
            margin-bottom: 0;
            margin-left: 400px;
            font-size: 200px;
            position: sticky;
            text-align: left;
            display: inline-block;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
        }
        .photo-column {
            display: flex;
            flex-direction: column;
            margin-right: 30px;
        }
        .video-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 20px;
        }
        .wrapper {
            margin-top: 100px;
            position: relative;
            width: 80vw;
            max-width: 2000px;
            aspect-ratio: 16 / 9;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            overflow: auto;
        }
        .photo-text {
            text-align: center;
            margin-bottom: 10px;
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }
        .becky-text {
            font-size: 80px;
            text-align: center;
            margin-bottom: 48px;
            position: absolute;
            bottom: 95px;
            left: 34%;
            transform: translateX(-50%);
            width: 100%;
        }
        .ryley-text {
            font-size: 80px;
            text-align: center;
            margin-bottom: 22px;
            position: absolute;
            bottom: 45px;
            left: 60%;
            transform: translateX(-50%);
            width: 100%;
        }
        .date-text {
            font-size: 45px;
            text-align: center;
            margin-bottom: 10px;
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }
        #phototable {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 480px;
            height: 1600px;
            padding-top: 30px;
            background-color: rgb(248, 226, 192);
            border-radius: 20px;
            overflow-y: hidden;
            overflow-x: hidden;
            margin-right: 20px;
            position: relative;
            box-sizing: border-box;
        }
        video, #canvas {
            border: 15px solid white;
            background-color: #D0BA98;
            border-radius: 60px;
            display: block;
            margin-bottom: 15px;
            object-fit: cover;
        }
        video {
            transform: scaleX(-1);
        }
        #countdown {
            position: absolute;
            transform: translate(-70%, -130%);
            font-size: 400px;
            font-weight: bold;
            color: rgb(255, 230, 200);
            display: none;
            z-index: 9999;
        }

        button {
            font-family: blithe, sans-serif;
            background-color: rgba(70,91,130,0.75);
            color: white;
            border: 5px solid rgba(255,255,255,1.0);
            padding: 15px 25px;
            font-size: 140px;
            cursor: pointer;
            border-radius: 75px;
            transition: background 0.3s ease;
            margin: 10px;
            width: 500px;
            height: 220px;
            transform: translateY(-260%);
        }
        button:hover {
            background-color: #33476B;
        }
    </style>
</head>
<body>
    <h1>Photo Booth</h1>
    <div class="container">
        <div id="phototable">
            <div>
                <span class="becky-text">Becky</span><br>
                <span class="ryley-text">&amp; Ryley</span><br>
                <span class="date-text">May 5th, 2025</span>
            </div>
        </div>
        <div class="video-container">
            <video id="video" width="1600" height="900" autoplay></video>
            <canvas id="canvas" width="1600" height="900" style="display: none;"></canvas>
            <div class="countdown-container">
                <div id="countdown"></div>
                <div class="button-container">
                    <button id="capture">Capture!</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        const video = document.getElementById('video');
        const originalCanvas = document.getElementById('canvas');
        const originalCtx = originalCanvas.getContext('2d');
        const captureBtn = document.getElementById('capture');
        const countdownElement = document.getElementById('countdown');
        const photoTable = document.getElementById("phototable");

        let filter = 'none';
        let photoCount = 0;
        const maxPhotosPerRound = 4;

        // Function definitions
        function startCountdownBeforePhoto() {
            let countdown = 5;
            updateCountdownText(countdown);
            countdownElement.style.display = "block";
            const interval = setInterval(() => {
                countdown -= 1;
                updateCountdownText(countdown);
                if (countdown === 0) {
                    clearInterval(interval);
                    countdownElement.style.display = "none";
                    capturePhoto();
                    if (photoCount < maxPhotosPerRound) {
                        setTimeout(startCountdownBeforePhoto, 1500);
                    } else {
                        savePhototable();
                        photoCount = 0;
                    }
                }
            }, 1000);
        }

        function updateCountdownText(count) {
            countdownElement.innerText = count;
        }

        function capturePhoto() {
            const capturedCanvas = document.createElement('canvas');
            const capturedCtx = capturedCanvas.getContext('2d');
            capturedCanvas.width = video.videoWidth;
            capturedCanvas.height = video.videoHeight;

            // Flip the image before drawing it
            capturedCtx.translate(capturedCanvas.width, 0);
            capturedCtx.scale(-1, 1);
            capturedCtx.drawImage(video, 0, 0, capturedCanvas.width, capturedCanvas.height);

            const img = new Image();
            img.src = capturedCanvas.toDataURL('image/png');

            img.style.width = "400px";
            img.style.height = "auto";
            img.style.border = "5px solid #FFFFFF";
            img.style.borderRadius = "15px";
            img.style.marginBottom = "20px";

            addPhotoToTable(img);
            photoCount++;
        }

        function addPhotoToTable(image) {
            photoTable.style.display = "flex";
            photoTable.insertBefore(image, photoTable.firstChild);
        }

        function savePhototable() {
            html2canvas(photoTable, {
                backgroundColor: null,
                scale: 1,
            }).then(canvas => {
                const dataUrl = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = dataUrl;
                a.download = 'photo_table.png';
                a.click();

                // Wait 5 seconds before resetting
                setTimeout(() => {
                    resetPhotoBooth();
                }, 5000);
            });
        }

        function saveAllPhotos() {
            const allPhotos = photoTable.querySelectorAll('img');
            allPhotos.forEach((photo, index) => {
                const originalSrc = photo.src;

                const hiddenCanvas = document.createElement('canvas');
                const hiddenCtx = hiddenCanvas.getContext('2d');
                const img = new Image();
                img.src = originalSrc;
                img.onload = () => {
                    hiddenCanvas.width = video.videoWidth;
                    hiddenCanvas.height = video.videoHeight;
                    hiddenCtx.drawImage(img, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
                    const dataUrl = hiddenCanvas.toDataURL('image/png');

                    const a = document.createElement('a');
                    a.href = dataUrl;
                    a.download = `photo${index + 1}.png`;
                    a.click();
                };
            });
        }

        // The DOMContentLoaded event should be placed here
        document.addEventListener("DOMContentLoaded", () => {
            initializeVideoStream();  // Ensure the video stream starts when the page is loaded

            // Start drawing the video to the original canvas
            drawVideoToOriginalCanvas();
        });

        function drawVideoToOriginalCanvas() {
            originalCtx.filter = filter;
            originalCtx.drawImage(video, 0, 0, originalCanvas.width, originalCanvas.height);
            requestAnimationFrame(drawVideoToOriginalCanvas);
        }

        let currentStream = null;  // Keep track of the current stream

        // Function to initialize the video stream
        function initializeVideoStream() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    currentStream = stream;
                    video.srcObject = stream;
                    drawVideoToOriginalCanvas(); // Ensure the video drawing starts
                })
                .catch(err => {
                    console.error("Error accessing the camera: ", err);
                });
        }

        // Reset function to clear photos
        function resetPhotoBooth() {
            const photoImages = photoTable.querySelectorAll('img');
            photoImages.forEach(img => img.remove());

            countdownElement.style.display = "none";
            captureBtn.style.display = "block";

            // Ensure the video drawing continues
            drawVideoToOriginalCanvas();
        }

        // Event listeners and initialization
        captureBtn.addEventListener('click', () => {
            captureBtn.style.display = "none";
            startCountdownBeforePhoto();  // Start the countdown before taking a photo
        });
    </script>
</body>
</html>
