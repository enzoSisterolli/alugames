function alterarStatus (id)
{
    let gameClicado = document.getElementById(`game-${id}`);
    let button = gameClicado.querySelector('.dashboard__item__button');
    let img = gameClicado.querySelector('.dashboard__item__img');
    let name = gameClicado.querySelector('.dashboard__item__name');

    if (gameClicado.classList.contains('dashboard__item__button--return')) {
        button.classList.remove('dashboard__item__button--return');
        button.classList.add('dashboard__item__button');
        img.classList.remove('dashboard__item__img--rented');
        img.classList.add('dashboard__item__img');
        name.classList.remove('dashboard__item__name--rented');
        name.classList.add('dashboard__item__name');
    }
    alert(name.innerHTML);
}
