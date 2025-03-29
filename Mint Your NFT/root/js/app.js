document.getElementById("mintButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("fileInput");
    const textInput = document.getElementById("textInput");
    const statusDiv = document.getElementById("status");

    if (!fileInput.files[0] && !textInput.value) {
        statusDiv.textContent = "Please upload a file or enter text.";
        return;
    }

    statusDiv.textContent = "Minting NFT...";

    try {
        
        await mintNFT(fileInput.files[0], textInput.value);
        statusDiv.textContent = "NFT minted successfully!";
    } catch (error) {
        console.error(error);
        statusDiv.textContent = "Error minting NFT.";
    }
});

document.getElementById("fileInput").addEventListener("change", (event) => {
    const fileNameElement = document.getElementById("fileName");
    const file = event.target.files[0];
    if (file) {
        fileNameElement.textContent = file.name; 
    } else {
        fileNameElement.textContent = "No file chosen"; 
    }
});

async function mintNFT(file, text) {
    
    return new Promise((resolve) => setTimeout(resolve, 2000));
}