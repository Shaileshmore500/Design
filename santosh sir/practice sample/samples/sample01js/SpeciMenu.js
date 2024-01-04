//Load Data  when documents is ready
$(document).ready(function () {
    loadMenu();
    loadScroller();
});
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function loadMenu() {

    $.ajax({
        url: "/SpeciMenu",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {

                html += '<div class="col-md-2">';
                html += ' <div class="nav_sub_menu_list hvr-bounce-in">'
               // html += '<a onclick=a_onclick(' + item.SpeciCode + '); href="' + item.Url + '?Specode=' + item.SpeciCode + '">' + item.Specialization + '</a>'
                html += '<a onclick=a_onclick(' + item.SpeciCode + '); href="' + item.Url + '">' + item.Specialization + '</a>'
                html += '</div></div>'
               
            });
            $('.18specimenu').html(html);

        },
        error: function (errormessage) {
            //alert(errormessage.responseText);
           // alert('loadMenu Error');
        }
    });
}

function a_onclick(val)
{


    setCookie("specicode", val);
    //alert(val+"onclick");
}




function loadScroller() {

    $.ajax({
        url: "/Scroller",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                
              
                html += '<a href="' + item.Url + '" target="_blank">' + item.Title + '</a>';
              
                //html += ' <div class="nav_sub_menu_list hvr-bounce-in">'
                //// html += '<a onclick=a_onclick(' + item.SpeciCode + '); href="' + item.Url + '?Specode=' + item.SpeciCode + '">' + item.Specialization + '</a>'
                //html += '<a onclick=a_onclick(' + item.SpeciCode + '); href="' + item.Url + '">' + item.Specialization + '</a>'
                //html += '</div></div>'

            });
            $('.webscroller').html(html);

        },
        error: function (errormessage) {
            //alert(errormessage.responseText);
            // alert('loadMenu Error');
        }
    });
}

