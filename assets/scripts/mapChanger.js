function mapChanger(activeTab = 0){
    const tabs = document.querySelectorAll('.map-menu__tabs-item');
    const maps = document.querySelectorAll('.map-view__cities');

    tabs[activeTab].classList.add('active');
    maps[activeTab].classList.add('active');

    for(const tab of tabs){
        tab.addEventListener('click', (e) => {
            clearActiveClasses()
            tab.classList.add('active');
            document.getElementById(e.target.id.split('-')[0]).classList.add('active')
        })
    }

    function clearActiveClasses(){
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        maps.forEach((map) => {
            map.classList.remove('active');
        })
    }
}

mapChanger();