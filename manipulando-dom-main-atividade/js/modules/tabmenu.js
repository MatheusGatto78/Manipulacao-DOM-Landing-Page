export default function tabMenuInit() {

    const imagens = document.querySelectorAll('.natureza-img');
    const secoes = document.querySelectorAll('.natureza-content');


    imagens.forEach((imagem, index) => {
        imagem.addEventListener('click', () => {

            secoes.forEach(secao => secao.classList.remove('active'));
            secoes[index].classList.add('active');
        });
    });


}