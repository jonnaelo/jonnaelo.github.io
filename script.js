function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var img = new Image();

    img.onload = function() {
        // Calculate the aspect ratio
        var aspectRatio = img.width / img.height;
        
        // Set the maximum allowable height (adjust this value as needed)
        var maxImageHeight = window.innerHeight * 0.9; // 80% of the viewport height

        // Calculate the maximum width based on the aspect ratio and maximum height
        var maxWidth = maxImageHeight * aspectRatio;

        // Check if the width exceeds the viewport width
        if (maxWidth > window.innerWidth * 0.9) {
            // If so, adjust the maximum width and height
            maxWidth = window.innerWidth * 0.9;
            maxImageHeight = maxWidth / aspectRatio;
        }

        // Set the modal image's height and width while maintaining the aspect ratio
        modalImg.style.height = Math.min(maxImageHeight, window.innerHeight * 0.9) + "px"; // Limit height to 80% of the viewport height
        modalImg.style.width = "auto";

        // Show the modal
        modal.style.display = "block";
        modalImg.src = imageSrc;
    };
    
    img.src = imageSrc;

    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
