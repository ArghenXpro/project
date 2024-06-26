
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalСloseButtons = document.querySelectorAll('[data-modal-close]');

modalButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
    })
})

modalСloseButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden')
    })
})