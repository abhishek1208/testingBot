/**
 * Created by abhishekyadav on 01/04/17.
 */
var btn_submit=document.getElementById('sbt_btn');
var txt_box=document.getElementById('input_query');
var para=document.getElementById('answer').firstElementChild;
btn_submit.onclick=function () {
    var text=txt_box.value;
    $.post("/",
        {
           query: [text],
            lang:'en',
            sessionId: 'fh'
        },
        function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            para.innerHTML=data;
        });

}