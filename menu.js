export function showSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

export function hideSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button'); 

    if(buttonElement.innerText === 'subscribe'){
        buttonElement.innerHTML = 'subscribed';
        buttonElement.classList.add('is-subscribed');

    }else{
        buttonElement.innerHTML = 'subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}


