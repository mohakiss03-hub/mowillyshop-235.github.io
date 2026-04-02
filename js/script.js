// Effet typing
const text = "Des créations uniques et modernes pour vous 🔥";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

typingEffect();

// WhatsApp
function whatsapp() {
    window.open("https://wa.me/221772350801?text=Bonjour%20je%20suis%20intéressé%20par%20vos%20produits");
}

// Appel
function call() {
    window.location.href = "tel:772350801";
}
function commander(produit) {
    let message = "Bonjour, je veux commander : " + produit;
    let url = "https://wa.me/221772350801?text=" + encodeURIComponent(message);
    window.open(url);
}