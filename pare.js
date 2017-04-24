var thisone=9780486264783;
var bookname = document.getElementsByName('bookbox')[0].value; // first element in DOM  (index 0) with name="txtJob"


function scanlist(){

  myGet(isbn_list[isbncount]); 

}



 function getFileName(){

  var e = document.getElementById("dropdown");
var book = e.options[e.selectedIndex].text;
       var filename= book.replace(/ /g,'');
       var csvfile = filename.concat(".csv");
       console.log(csvfile);
       var displace=0; 

       bookbubble(csvfile,displace); 
       console.log(displace);





}
 function getFileName1(){

//d3.selectAll("svg > *").remove();

  var e = document.getElementById("dropdown1");
var book = e.options[e.selectedIndex].text;
       var filename= book.replace(/ /g,'');
       var csvfile = filename.concat(".csv");
       console.log(csvfile);
      var  displace= 800; 


       bookbubble(csvfile, displace); 
              console.log(displace);







}


function reloadpage(){
window.location.reload(true);
}



function myGet(i){

console.log("in get");

  $.ajax({
    type:"GET",
    data:{
      key:"7UfR82fDQv6hHuD2NaAkg"
    },
    dataType: 'xml',   

    url:"https://www.goodreads.com/book/isbn/" + thisone,
       success: parseXML
    });


}






var value; 
function parseXML(xml){


    $(xml).find('shelf').each(function() {
      $.each(this.attributes, function(i, attrib){
          value = attrib.value;
        // console.log(name);
         console.log(value);


      });


    });



}

