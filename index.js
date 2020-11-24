const btnShare = document.getElementById("btn-main");
const socialBubbleElement = document.getElementById('social-bubble');
const svgIcon = document.getElementById('arrow');

btnShare.addEventListener('click', handleClick);



function handleClick() {
    
    socialBubbleElement.classList.toggle('toggleFlex');

    if (window.innerWidth <= 560 || document.documentElement.clientWidth <= 560
        || document.body.clientWidth <= 560) {
            socialBubbleElement.classList.toggle('mobile-bubble');
        btnShare.classList.toggle('btn-positioned');
        svgIcon.classList.toggle('white');

        for (let i = 0; i < socialBubbleElement.children.length; i++) {
            socialBubbleElement.children[i].classList.toggle('u-mr-m');
        }
    }
    
    
    
    
}




