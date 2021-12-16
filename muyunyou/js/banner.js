(function () {
    var list = document.getElementsByClassName('banner-img-house');
    var rightBtn = document.getElementById('right-btn');
    var leftBtn = document.getElementById('left-btn');
    var banner_img = document.getElementById('banner_img');
    var circle_ol = document.getElementById('circle_ol');
    var circle_lis = circle_ol.getElementsByTagName('li');
    var banner = document.getElementById('banner');
    var banner_img_box = document.getElementsByClassName('banner_img');
    // 克隆第一张li元素
    var cloneli = banner_img.cloneNode(true);
    list[0].appendChild(cloneli);
    var picnum = 0;
    var lock = true;
    // 右按钮
    rightBtn.onclick = function () {
        if (!lock) { return; }
        list[0].style.transition = 'transform 0.5s ease';
        picnum++;
        if (picnum > 4) {

            setTimeout(function () {
                picnum = 0;
                list[0].style.transform = 'none';
                list[0].style.transition = 'none';
            }, 500);
        }
        list[0].style.transform = 'translateX(' + -16.66 * picnum + '%)';
        setCircle();
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 500);
    }
    // 左按钮
    leftBtn.onclick = function () {
        if (!lock) { return; }
        if (picnum == 0) {
            list[0].style.transition = 'none';
            // 这里取消过渡，是为了让图片0瞬移到图片5。
            list[0].style.transform = 'translateX(' + -16.66 * 5 + '%)';
            // 这里执行了瞬移到图片5的动作
            picnum = 4;
            setTimeout(function () {
                /*这里设置延时器是因为，如果不用延时器，上面的取消过渡语句会失效，
                *因为它下面的list[0].style.transition = 'transform .5s ease'语句会覆盖它。
                */
                list[0].style.transition = 'transform .5s ease';
                // 重新启用过渡
                list[0].style.transform = 'translateX(' + -16.66 * picnum + '%)';
                // 移动到图片4
                /*执行从第一张图片切换到最后一张图片时，实际上是执行了两次图片的移动
                *第一次是移动到第一张图片的克隆图片，第二次是移动到倒数第二张图片，也就是用户眼里的最后一张。
                */
            }, 0)
        } else if (picnum > 0) {
            picnum--;
            list[0].style.transition = 'transform .5s ease';
            list[0].style.transform = 'translateX(' + -16.66 * picnum + '%)';
        }
        setCircle();
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 500);
    }
    // 自动轮播图片
    function bannerZiDong() {
        list[0].style.transition = 'transform 0.5s ease';
        picnum++;
        if (picnum > 4) {
            // picnum = 0;
            setTimeout(function () {
                picnum = 0;
                list[0].style.transform = 'none';
                list[0].style.transition = 'none';
            }, 1000)
        }
        list[0].style.transform = 'translateX(' + -16.66 * picnum + '%)';
        setCircle();
    }
    var time = setInterval(bannerZiDong, 1500);
    // 小圆点
    function setCircle() {
        for (var i = 0; i <= 4; i++) {
            if (i == picnum) {
                circle_lis[i].className = 'circle_long';
            } else {
                circle_lis[i].className = '';
            }
        }
    }
    // 使用事件委托，点击远点切换图片
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var n = Number(e.target.getAttribute('data-num'))
            picnum = n;
            list[0].style.transform = 'translateX(' + -16.66 * picnum + '%)';
        }
        setCircle()
    }
    // 鼠标进入,暂停自动轮播
    banner.onmouseover = function () {
        clearInterval(time);
    }
    banner.onmouseleave = function () {
        clearInterval(time);
        time = setInterval(bannerZiDong, 1500);
    }
})();