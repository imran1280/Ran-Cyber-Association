// Matrix Effect (Hacker Style Background)
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const matrix = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Alert Button Function
function showAlert() {
    alert("Welcome to Ran Cyber Association! Stay Secure, Stay Updated.");
         }
// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        const tool = this.closest('.review-card').querySelector('.stars').getAttribute('data-tool');
        const ratingValue = this.getAttribute('data-value');

        // Mark selected stars
        this.parentNode.querySelectorAll('.star').forEach(star => {
            star.classList.remove('selected');
        });
        for (let i = 0; i < ratingValue; i++) {
            this.parentNode.querySelectorAll('.star')[i].classList.add('selected');
        }

        // Display the rating
        document.getElementById(`rating-${tool}`).textContent = `Rating: ${ratingValue}`;
    });
});

let timeout;
window.addEventListener('scroll', function() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        // Do something after scroll ends, for example loading more content
    }, 150);
});
