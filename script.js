
// Your WhatsApp Number
// Replace with your actual number including country code
const whatsappNumber = "918979498310";

// Your Email Address
const myEmail = "prince.maurya.bca@gmail.com";

// Get Form Elements
const nameInput = document.getElementById("visitorName");
const messageInput = document.getElementById("visitorMessage");

// WhatsApp Button
document.getElementById("whatsappBtn").addEventListener("click", function () {

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert("Please enter your name and message!");
        return;
    }

    const fullMessage =
        `Hello Prince Maurya!\n\n` +
        `My Name: ${name}\n\n` +
        `Message: ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");

});

// Email Button
document.getElementById("emailBtn").addEventListener("click", function () {

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert("Please enter your name and message!");
        return;
    }

    const subject = `Portfolio Contact - ${name}`;

    const body =
        `Hello Prince Maurya,\n\n` +
        `My Name: ${name}\n\n` +
        `Message: ${message}`;

    const emailURL =
        `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = emailURL;

});
