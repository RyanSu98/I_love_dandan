function format_time(i) {
    if (i < 10) {
        return "0" + i;
    }
    return i;
}

function count() {
    // 获取元素
    day = $('#day');
    hour = $('#hour');
    minute = $('#minute');
    second = $('#second');

    //获得时间
    date_now = new Date();
    date_begin = new Date(2018, 6, 23);
    // 下面的日期之所以要加1，是我和单单讨论的结果
    // 我们是2018年7月23日在一起的，我们认为那一天是第1天，而非第0天
    // 问题： https://单庄园.我爱你/images/question.png
    // 答案： https://单庄园.我爱你/images/reply.png
    days = Math.floor((date_now.getTime() - date_begin.getTime()) / (24 * 3600 * 1000)) + 1;
    hours = date_now.getHours();
    minutes = date_now.getMinutes();
    seconds = date_now.getSeconds();

    // 格式化时间
    f_days = format_time(days);
    f_hours = format_time(hours);
    f_minutes = format_time(minutes);
    f_seconds = format_time(seconds);

    // 设置时间
    day.text(f_days);
    hour.text(f_hours);
    minute.text(f_minutes);
    second.text(f_seconds);
}
// 首次调用
count();
// 循环调用
setInterval("count()", 1000); // 循环每秒定时调用