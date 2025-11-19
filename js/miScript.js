class CalculadoraImc {
    constructor(altura, peso) {
        this.altura = Number(altura);
        this.peso = Number(peso);
    }

    obtenerImc() {
        return this.peso / (this.altura * this.altura);
    }

    generarResumen() {
        const imc = this.obtenerImc();
        const imcFinal = imc.toFixed(2);

        let comentario = '';
        let imagen = '';

        const img = document.getElementById("img");
        img.style.display = "block"; // ACTIVAR IMAGEN

        if (imc < 18.5) {
            comentario = 'PESO BAJO — DEBERÍAS CONSULTAR A UN ESPECIALISTA.';
            imagen = 'images/imagen1.png';
        } 
        else if (imc >= 18.5 && imc < 25) {
            comentario = 'PESO NORMAL — SIGUE ASÍ Y CUIDA TU SALUD.';
            imagen = 'images/imagen2.png';
        } 
        else if (imc >= 25 && imc < 30) {
            comentario = 'SOBREPESO — CUIDATE UN POCO MÁS.';
            imagen = 'images/imagen3.png';
        } 
        else {
            comentario = 'OBESIDAD — CONSULTA A UN ESPECIALISTA.';
            imagen = 'images/imagen4.jpg';
        }

        img.src = imagen;

        return `
            <strong> TU IMC ES: ${imcFinal} <br> </strong>
            <strong>${comentario}</strong>
        `;
    }
}

document.getElementById('forma').addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (peso <= 0 || altura <= 0) {
        document.getElementById('resumen').innerHTML = 'NÚMERO NO VÁLIDO. INTENTA DE NUEVO.';
        document.getElementById('img').style.display = "none";
        return;
    }

    const imc = new CalculadoraImc(altura, peso);
    document.getElementById('resumen').innerHTML = imc.generarResumen();


    
});

