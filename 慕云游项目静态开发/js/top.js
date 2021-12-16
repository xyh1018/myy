(function () {
    var topBtn = document.getElementById('backtop');
    topBtn.onclick = function () {
        var time = setInterval(() => {
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(time);
            } else {
                document.documentElement.scrollTop -= 200;
            }
        }, 20);
    }
    // 监听页面滚动
    window.onscroll = function () {
        var scrolltop = document.documentElement.scrollTop || window.scrollY;
        if (scrolltop == 0) {
            topBtn.style.display = 'none';
        } else {
            topBtn.style.display = 'block';
        }
    }
    // 页面刷新回到顶部
    window.onbeforeunload = function () {
        //刷新后页面自动回到顶部
        document.documentElement.scrollTop = 0;  //ie下
        document.body.scrollTop = 0;  //非ie
    }
})();