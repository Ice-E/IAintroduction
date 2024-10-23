const subscriptionKey = 'faaa3191cf324ba5baa6216bd6e09e01'; // Remplacez par votre clé d'abonnement Azure
const endpoint = 'https://testprojetia.cognitiveservices.azure.com/'; // Remplacez par votre URL d'endpoint Azure
const analyzeUrl = `${endpoint}/vision/v3.2/analyze?visualFeatures=Categories,Description,Color`;

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Crée un URL local pour l'image
        const imageUrl = URL.createObjectURL(file);

        // Sélectionne l'élément image et met à jour le 'src'
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';  // Affiche l'image

        // Utilise FileReader pour lire le fichier
        const reader = new FileReader();
        reader.onloadend = function() {
            const imgBase64 = reader.result.split(',')[1]; // Base64 string
            // Si vous avez besoin de l'image sous forme de base64, utilisez-la ici
            // Sinon, téléchargez l'image sur votre serveur ou utilisez un service d'hébergement d'images
            uploadImage(file);
        };
        reader.readAsDataURL(file);
    }
});

function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    // Assurez-vous d'avoir une API ou un endpoint où vous pouvez envoyer le fichier
    // Ici nous allons simplement imprimer le fichier
    console.log('File uploaded:', file);
    
    // Remplacez ceci par votre logique pour télécharger l'image et obtenir une URL
    // Pour l'exemple, nous utilisons une URL fictive
    const imageUrl = 'https://example.com/your-uploaded-image.jpg'; // Remplacez par l'URL de l'image téléchargée
    analyzeImage(imageUrl);
}

function analyzeImage(imageUrl) {
    fetch(analyzeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        body: JSON.stringify({ url: imageUrl }) // Envoie l'URL de l'image à l'API Azure
    })
    .then(response => {
        // Vérifie si la réponse est correcte avant de la traiter
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Tente de convertir la réponse en JSON
        return response.json();
    })
    .then(data => {
        // Affiche les résultats si la conversion JSON est réussie
        console.log("Azure Response Data:", data);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data, null, 2); // Affiche les résultats de l'analyse
    })
    .catch(error => {
        // Gestion de toutes les erreurs (réseau, JSON invalide, etc.)
        console.error('Error in analyzing the image:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = `Error: ${error.message}`;
    });
}
