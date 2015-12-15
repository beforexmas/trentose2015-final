/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */
var scoreCount = 0;
var currentAnsa = "";
var count = 0;
var SantaModel = {
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
       SantaView.display(list,count);
       currentAnsa = list[count].answer;
   },
  
   /* It moves "current" to the next request */
   next : function (){
      // $(".question-items").empty();
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
       //return
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
    //Verifica se è giusta la risposta
   pack : function(item) { 
       if(item==currentAnsa) {
            return 1;       
       }
       else {
            return 0;       
       }
   },   
    liEvent1: function(list) {
        $("li").click(function() {
            scoreCount += SantaModel.pack($(this).text());
            $(".question-items").empty(); 
            count++;
            currentAnsa = list[count].answer;
            $(".question-items").append("<h1>"+list[count].question+"</h1>"+"<li>"+list[count].options[0]+"</li>"+"<li>"+list[count].options[1]+"</li>");    
            
        SantaModel.liEvent2(list);
        });
    },
    liEvent2: function(list) {
        $("li").click(function() {
            scoreCount += SantaModel.pack($(this).text());
            $(".question-items").empty(); 
            count++;
            currentAnsa = list[count].answer;
            $(".question-items").append("<h1>"+list[count].question+"</h1>"+"<li>"+list[count].options[0]+"</li>"+"<li>"+list[count].options[1]+"</li>");    
            
        SantaModel.liEvent3(list);
        });
    } ,   
    liEvent3: function(list) {
        $("li").click(function() {
            scoreCount += SantaModel.pack($(this).text());
            $(".question-items").empty(); 
            count++;
            
      // currentAnsa = list[count].answer;
         /*   $(".question-items").append("<h1>"+list[count].question+"</h1>"+"<li>"+list[count].options[0]+"</li>"+"<li>"+list[count].options[1]+"</li>");    
            
            
        });*/
             $(".question-items").append("<h1>Total points = " +scoreCount+"</h1>");
    });}
};

var SantaView = {
    display: function(list,count) {
        $(".question-items").append("<h1>"+list[count].question+"</h1>"+"<li>"+list[count].options[0]+"</li>"+"<li>"+list[count].options[1]+"</li>");    
        
        SantaModel.liEvent1(list);
    }
}

$(document).ready(function(){
    SantaModel.init(requests);
});