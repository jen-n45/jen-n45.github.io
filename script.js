// Ensure html2canvas is loaded
if (typeof html2canvas === 'undefined') {
} else {
    const video = document.getElementById('video');
    const originalCanvas = document.getElementById('canvas');
    const originalCtx = originalCanvas.getContext('2d');
    const captureBtn = document.getElementById('capture');
    const countdownElement = document.getElementById('countdown');
    const photoTable = document.getElementById("phototable");

    let filter = 'none';
    let photoCount = 0;
    const maxPhotosPerRound = 4;

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

        if (photoCount >= maxPhotosPerRound) {
            saveAllPhotos();
        }
    }

    function addPhotoToTable(image) {
        photoTable.style.display = "flex";
        photoTable.insertBefore(image, photoTable.firstChild);
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

        // Now calling html2canvas directly on photoTable
        html2canvas(photoTable, {
            backgroundColor: null,
            scale: 1,
        }).then(canvas => {
            const dataUrl = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'photo_table.png';
            a.click();
        }).catch(error => {
            console.error("Error capturing photoTable with html2canvas", error);
        });

        setTimeout(() => {
            resetPhotoBooth();
        }, 5000);
    }

    captureBtn.addEventListener('click', () => {
        // Hide the capture button after click
        captureBtn.style.display = "none";

        photoCount = 0;
        startCountdownBeforePhoto();
    });

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
            video.onloadedmetadata = () => {
                originalCanvas.width = video.videoWidth;
                originalCanvas.height = video.videoHeight;
                drawVideoToOriginalCanvas();
            };
        })
        .catch(err => console.error('Error accessing webcam:', err));

    function drawVideoToOriginalCanvas() {
        originalCtx.filter = filter;
        originalCtx.drawImage(video, 0, 0, originalCanvas.width, originalCanvas.height);
        requestAnimationFrame(drawVideoToOriginalCanvas);
    }

    function resetPhotoBooth() {
        const photoImages = photoTable.querySelectorAll('img');
        photoImages.forEach(img => img.remove());

        countdownElement.style.display = "none";

        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;

        // Show the capture button again after reset
        captureBtn.style.display = "block";
    }
}
