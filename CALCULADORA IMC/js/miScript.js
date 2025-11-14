
class calculadoraImc {
    constructor(a, p) {
        this.altura = Number(a);
        this.peso = Number(p);
    }

    obtenerImc() {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    generarResumen() {
        const resultadoImc = this.obtenerImc();
        const imcFinal = resultadoImc.toFixed(2);

        let nivel = '';
        let comentario = '';
        let imagen;

        const immagen = document.getElementById("img");
        immagen.style.display = "block";


        if (resultadoImc < 18.5) {
            nivel = 'PESO BAJO';
            comentario = 'ESTAS BAJO DE PESO, DEBERÍAS CONSULTAR A UN ESPECIALISTA';
            imagen = 'images/imagen1.png';
        }

        else if (resultadoImc >= 18.5 && resultadoImc < 25.0) {
            nivel = 'PESO NORMAL';
            comentario = 'ESTAS NORMAL DE PESO, SIGUE ASÍ Y CUIDA TU SALUD';
            imagen = 'images/imagen2.png';
        }

        else if (resultadoImc >= 25.0 && resultadoImc < 30.0) {
            nivel = 'SOBRE PESO';
            comentario = 'ESTAS UN POCO PASADO DE TU PESO NORMAL, CUIDATE UN POCO MÁS';
            imagen = 'images/imagen3.png';
        }
        else {
            nivel = 'OBECIDAD';
            comentario = 'ESTAS SUBIDO DE PESO, DEBERÍAS CONSULTAR A UN ESPECIALISTA';
            imagen = 'images/imagen4.jpg';
        }
        document.getElementById("img").src = imagen;

        return `
            <strong> TU PESO ES: ${this.peso.toFixed(1)} kg <br> </strong>
            <strong> TU ALTURA ES: ${this.altura.toFixed(2)} m <br> </strong>
            <strong> TU IMC ES: ${imcFinal}<br>
            ${comentario}</strong>
        `;
    }

}

document.getElementById('forma').addEventListener("submit", function (e) {
    e.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if (peso <= 0 || altura <= 0) {
        document.getElementById('resumen').innerHTML = 'NUMERO NO VALIDO, PRUEBA CON UN NUMERO MÁS ALTO';
        document.getElementById("img").style.display = "none";
        return;
    }

    const imc = new calculadoraImc(altura, peso);

    document.getElementById('resumen').innerHTML = imc.generarResumen();

});