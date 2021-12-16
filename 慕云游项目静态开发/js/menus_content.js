(function () {
    var menusUl = document.getElementById('menus_ul');
    var bannerlis = document.querySelectorAll('#menus_ul li')
    var allmenus = document.querySelectorAll(".menus-box .menu");
    menusUl.onmouseover = function (e) {
        // 利用事件委托
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute('data-t');
            console.log(t);
            var themenu = document.querySelector(".menus-box .menu[data-t =" + t + "]");
            console.log(themenu);
            for (var i = 0; i < allmenus.length; i++) {
                allmenus[i].className = 'menu';
            }
            themenu.className = 'menu menusul';
        }
    }
    menusUl.onmouseleave = function () {
        for (var i = 0; i < bannerlis.length; i++) {
            bannerlis[i].className = bannerlis[i].getAttribute('data-t');
            allmenus[i].className = 'menu';
        }
    }
})();