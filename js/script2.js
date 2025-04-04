function addToCart() {
    const sizeSelect = document.getElementById("size");
    const selectedSize = sizeSelect.value;
    const cartMessage = document.getElementById("cart-message");

    if (selectedSize) {
        cartMessage.innerText = `✅ Ajouté au panier : Taille ${selectedSize}`;
        cartMessage.classList.remove("text-red-500");
        cartMessage.classList.add("text-green-600");
    } else {
        cartMessage.innerText = "❌ Veuillez sélectionner une taille.";
        cartMessage.classList.remove("text-green-600");
        cartMessage.classList.add("text-red-500");
    }
}

let selectedPath = null;
const paths = document.querySelectorAll(".product-shape");
const colorPickerContainer = document.getElementById("color-picker-container");

paths.forEach(path => {
    path.addEventListener("click", function () {
        if (selectedPath) {
            selectedPath.classList.remove("selected");
        }
        selectedPath = this;
        selectedPath.classList.add("selected");
        colorPickerContainer.classList.remove("hidden");
    });
});

function changeColorPicker(picker) {
    if (selectedPath) {
        const color = picker.value;
        selectedPath.style.fill = color;
        selectedPath.style.stroke = "none";
        const gifContainer = document.getElementById("gif-container");
        gifContainer.classList.remove("hidden");

        setTimeout(() => {
            gifContainer.classList.add("hidden");
        }, 1000);
    }
}