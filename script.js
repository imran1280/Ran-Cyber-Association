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
// Temporary Email API Integration
document.getElementById('tempEmailForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // API URL (Here we will use TempMail API)
    fetch('https://api.temp-mail.org/request/mail/id/')
        .then(response => response.json())
        .then(data => {
            const email = data[0].email;
            document.getElementById('generatedEmail').innerHTML = `Your temporary email is: <strong>${email}</strong>`;
        })
        .catch(error => {
            console.error('Error generating temporary email:', error);
            alert('Something went wrong, please try again later.');
        });
});

// Hacking Animation - Simulating output in hacker terminal
const hackerOutput = document.querySelector('.hacker-output');

function simulateHacking() {
    const outputs = [
        'Initializing hack...',
        'Bypassing firewalls...',
        'Accessing database...',
        'Decrypting files...',
        'Data breach detected...',
        'Hack successful!'
    ];
    
    let i = 0;
    setInterval(() => {
        hackerOutput.innerText = outputs[i % outputs.length];
        i++;
    }, 3000);
}

simulateHacking();
