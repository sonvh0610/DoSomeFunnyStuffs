var script = document.createElement("script");
script.src = "http://code.jquery.com/jquery-2.2.4.js";
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    var teacher_name = $("#spGiangVien").text().trim();
    $("#formDanhGia #formSurvey .section .question-rankings").each(function() {
        var random = Math.floor(Math.random() * 5) + 1;
        $(this).find("input[type=radio]:nth-child(" + random + ")").attr("checked", "checked");
    });
    // This will automatically selected when set value is true
    if (confirm("Điền tự động luôn cả dòng cuối cùng, chịu hông?")) {
        $("#formDanhGia #formSurvey .section .section-questions li").each(function() {
            var random = Math.floor(Math.random() * 4) + 1;
            $(this).find("li:nth-child(" + random + ") input").attr("checked", "checked");
        });
        $("#formDanhGia #formSurvey .section .section-questions li ul li input[type=checkbox]").each(function() {
            $(this)[0].checked = true;
        });
    }
    $("#formDanhGia #formSurvey .section textarea").val(teacher_name);
    $("#formDanhGia").append("<p style='font-size:200%'>Do cool stuffs, right? Coded by <a href='https://www.facebook.com/vhson.it6'>Sơn 69</a> =))</p>")
});