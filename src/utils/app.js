import $ from 'jquery'
export function truncateString (str) {
    if (str.length <= 7) {
        return str; // 如果字符串长度小于等于7，则不需要截断，直接返回原字符串
    } else {
        const firstFour = str.substring(0, 4); // 取前四位
        const lastThree = str.substring(str.length - 3); // 取后三位
        return firstFour + '...' + lastThree; // 拼接前四位、三个点和后三位
    }
}

export function daysSince (timestamp) {
    const now = Date.now(); // 获取当前时间戳（毫秒）

    // 获取当天的零点时间戳
    let startOfDay = new Date().setHours(0, 0, 0, 0);

    // 如果当前时间已经过了当天的 12 点，则将其算作第二天的开始
    if (now >= startOfDay + 12 * 60 * 60 * 1000) {
        startOfDay = startOfDay + 24 * 60 * 60 * 1000;
    }

    const difference = now - timestamp; // 计算时间差（毫秒）
    const days = difference / (1000 * 60 * 60 * 24); // 将时间差转换为天数
    return Math.ceil(days); // 返回天数并向下取整
}


export function navList () {
    // 给导航项绑定点击事件
    $('#dappNav a').click(function () {
        // 移除其他导航项的高亮类
        $('#dappNav a').not(this).removeClass('clickDappNav');
        // 添加当前点击导航项的高亮类
        $(this).addClass('clickDappNav');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
}

export function toggTop () {
    $(document).ready(function () {
        // 点击按钮触发事件
        $(".menuIcon").click(function () {
            // 切换显示/隐藏
            $(".menu").toggle();
        });

        // 返回顶部按钮
        var $scrollToTopBtn = $('#get-top');

        // 滚动事件监听
        $(window).scroll(function () {
            // 当滚动高度达到一定值时显示按钮
            if ($(this).scrollTop() > 300) {
                $scrollToTopBtn.fadeIn();
            } else {
                $scrollToTopBtn.fadeOut();
            }
        });

        // 点击按钮滚动到顶部
        $scrollToTopBtn.click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    });
}