$(document).ready(function () {

    // after i defined post so i want to get the CSRF_TOKEN so i use like this 

    var csrf = $("input[name=csrfmiddlewaretoken]").val();
    //for using the click handaler, in here i use (btn) class of css or bootstrab that i have
    $(".btn").click(function () {
        $.ajax({
            // url is use to send the request to
            url: '',
            type: 'get',
            // we use data like a dictionary  this data is we are going to send  to the server for e.g:
            // i wnna send the text to my server 
            // the word (this) is refere to thee (.btn) class
            data: {
                button_text: $(this).text()
            },
            // success is what will happend when sever response successfuly
            success: function (response) {
                // now i gnna pass the text a new value, let's say the vlaue of the second key
                // of teh response object 
                $(".btn").text(response.seconds)
                $("#seconds").append('<li>'+response.seconds+'</li>')
            }
        });
    });

    // the first argument i'm defining the event which is (click) and second one is 
    // i need to define the decendent element of (ul) tag on which i whant to process teh click event 
    // so it will be it's child list item element, so then what will be happend -> we do a function 
    $("#seconds").on('click', 'li', function () {
        $.ajax({
            url: '',
            type: 'post',
            data: {
                // this time this refere to the (li) element and i'm getting it's text
                text: $(this).text(),
                csrfmiddlewaretoken: csrf
            },
            success: function (response) {
                $("#right").append('<li>' + response.data + '</li>')
            }
        })
    });
});