window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContant() {
        tabsContent.forEach ( item => {
           item.classList.add('hide');
           item.classList.remove('show','fade');
        });

        tabs.forEach(item => {
                item.classList.remove('tabheader__items');
        });
    }

    function showTabContant(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__items');
    }

    hideTabContant();
    showTabContant();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains ('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContant();
                    showTabContant(i);
                }
            });
        }
    });
    // Modal 
    const  modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');// необходимо прописать show класс для modal
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
     }   

    modalTrigger.forEach( btn => {
        btn.addEventListener('click', openModal);
    });

    
    
    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show'); // необходимо прописать show класс для modal
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
           closeModal();
        }
    });

    document.addEventListener ('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')){
            closeModal(); 
        }
    });

    const modalTimerId = setTimeout (openModal, 3000);

    function  showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);
});