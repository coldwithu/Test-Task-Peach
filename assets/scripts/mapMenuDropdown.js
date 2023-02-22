function mapMenuDropdown(){
    const dropdownBtn = document.querySelector('.map-menu__dropdown-logo');
    const tabs = document.querySelector('.map-menu__tabs');
    const map = document.querySelector('.map-view');
    const dropdown = document.querySelector('.map-menu__dropdown')

    dropdownBtn.addEventListener('click', () => {
        if(!dropdownBtn.classList.contains('active')){
            dropdownBtn.classList.add('active');
            tabs.classList.add('disabled');
            map.classList.add('disabled');
            dropdown.classList.add('active');
        }else {
            dropdownBtn.classList.remove('active');
            tabs.classList.remove('disabled');
            map.classList.remove('disabled');
            dropdown.classList.remove('active');
        }
    })
}

mapMenuDropdown();