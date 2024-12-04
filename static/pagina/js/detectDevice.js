// Detección de dispositivo usando el Agente de Usuario
function detectDevice() {
    // Obtener la cadena del agente de usuario
    var userAgent = navigator.userAgent;

    // Verificar si el dispositivo es móvil
    var isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
        // Móvil: Mostrar enlace de descarga
        document.getElementById("mobile-download").classList.remove("d-none");
        document.getElementById("pc-download").classList.add("d-none");
    } else {
        // PC: Mostrar QR
        document.getElementById("mobile-download").classList.add("d-none");
        document.getElementById("pc-download").classList.remove("d-none");

        // Generar QR
        generateQRCode();
    }
}

// Generar el QR con la URL de la APK usando la API pública
function generateQRCode() {
    var qrContainer = document.getElementById('qr-code');
    var apkUrl = 'https://github.com/K4yrYu/Progra_MobileV6/releases/download/1.00/MegaGames.apk.apk'; // Cambia esta URL a tu enlace APK

    // Usar la API pública QRServer para generar el QR
    var qrImageUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(apkUrl) + "&size=150x150";

    // Crear una imagen con el código QR generado
    var img = document.createElement("img");
    img.src = qrImageUrl;
    img.alt = "QR Code para descargar la app";

    // Insertar la imagen en el contenedor del QR
    qrContainer.innerHTML = "";
    qrContainer.appendChild(img);
}

// Ejecutar la detección cuando la página cargue
window.onload = function () {
    detectDevice(); // Ejecuta la detección al cargar la página

    // Re-ejecutar cuando se cambie el tamaño de la ventana
    window.onresize = detectDevice;
};
