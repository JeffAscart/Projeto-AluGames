function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
  
    if (botao.classList.contains('dashboard__item__button--return')){
        let opcao = window.confirm(`Você realmente deseja devolver ${nomeJogo.textContent}?`);
        if (opcao) {
          alert ('jogo devolvido');
        } else {
          return
        }
    }
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
//        alert ('teste 4')
    }
    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
//        alert ('Teste 2')
        return
    } 




    if (imagem.classList.contains('dashboard__item__img')){
        imagem.classList.add('dashboard__item__img--rented');
//        alert ('teste 3')
    }
    if (botao.classList.contains('dashboard__item__button')){
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
//        alert ('teste 1')
        return
    }


        


    
   // let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
   // alert(nomeJogo.textContent);
}