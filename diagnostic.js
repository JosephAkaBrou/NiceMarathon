 function check_input(){
  input = document.getElementById('research').value
  console.log(input)
    if(input.length > 1 | input.value == "undefined"){
      getDiagnost(input)
    }else{
     
        alert("ENTRER UN NOM DE VILLE ! ")
    }

 }           
	function getDiagnost(input){
		var top = document.getElementById("main1");
      var nested = document.getElementById("form1");

       top.removeChild(nested); 
       top.innerHTML = "<br><h1 style='text-align: center'>Diagnostic de "+ input +"</h1><br><br>"
  
  console.log(" LOL " + Math.random() + Math.random())
indic = "<br><br>"
i = 0
condition_tab = [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),
Math.random(),Math.random(),Math.random(),Math.random(),
Math.random(),Math.random(),Math.random()]
//condition_tab = [5,1,2,-4,5,-7,9,0,1,4,0,-7]
var warning_map = new Map();
var good_map = new Map();
indicators.forEach(function(elem) { 
      list = []
      statut = "grey"
      condition = condition_tab[i]
      if (condition >  0.3) {
        statut = "green"
        } else {
            statut = "orange"
      }
      
      if (statut == 'red' | statut == 'orange') {
        list = [statut,icones.get(elem)]
        warning_map.set(ind_names.get(elem),list)
      }      
      if (statut == "green") {
        list = [statut,icones.get(elem)]
        good_map.set(ind_names.get(elem),list)
      }

/*

next_indic = 

  "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'>"+
    "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
        "<div>"+
          "<img class='img-fluid' src="+ icones.get(elem)+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
        "</div>"+
        "<p class='col p-2 m-0' text-center> "+ ind_names.get(elem) + "</p>"+
                  "<svg height='50' width='80'><circle id="+ 'id'+i+" cx='50' cy='25' r='10'  stroke-width='3' fill="+ statut +" /></svg>"+
    "</div>"+
  "</div>"
; */

      /*  next_indic =      "<div class='card col-sm-4 w-25' style='margin:15px'>"+
        "<div class='card-img-top d-flex align-items-center bg-light style='background-color: #D8D8D8' '>"+
            "<div>"+
                "<img class='img-fluid' src="+ icone[i]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
            "</div>"+
            "<p class='col p-2 m-0'>Indicateur "+ i + "</p>"+
       " </div>"+
 " </div>" */
	//indic = indic + next_indic
  i++; 
});

console.log(warning_map.size)
console.log(good_map.size)
 top.innerHTML += "<br><h3 style='text-align: center'> Positif </h3><br>"
    var good_node = document.createElement("div");                 // Create a <li> node
    good_node.setAttribute("class","row container-fluid bg-light")
    good_node.setAttribute("id","good_diagno")         // Create a text node
                              // Append the text to <li>
document.getElementById("main1").appendChild(good_node); 

good_map.forEach(function(valeur, clé) {

          next_indic = 
            "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'>"+
              "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
                  "<div>"+
                    "<img class='img-fluid' src="+  valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                  "</div>"+
                  "<p class='col p-2 m-0' text-center> "+ clé  + "</p>"+
                            "<svg height='50' width='70'><circle id="+ 'id'+i+" cx='40' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+
              "</div>"+
            "</div>"
          console.log("MDR")

  indic = indic + next_indic
  i++;
})
document.getElementById("good_diagno").innerHTML = indic 

    var warning_diagno = document.createElement("div");                 // Create a <li> node
    warning_diagno.setAttribute("class","row container-fluid bg-light")
    warning_diagno.setAttribute("id","warning_diagno")         // Create a text node
                              // Append the text to <li>
top.innerHTML  += "<br><br><h3 style='text-align: center'> Axe d'amélioration </h3><br><br>"
document.getElementById("main1").appendChild(warning_diagno);

indic = ""
warning_map.forEach(function(valeur, clé) {
          next_indic = 
            "<div class='col-sm-4 ' style='margin-bottom:15px;margin-top:15px;'>"+
              "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm' style='background-color: #D8D8D8' '>"+
                  "<div>"+
                    "<img class='img-fluid' src="+  valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                  "</div>"+
                  "<p class='col p-2 m-0' text-center> "+ clé  + "</p>"+
                            "<svg height='50' width='70'><circle id="+ 'id'+i+" cx='40' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+
              "</div>"+
            "</div>"
  indic = indic + next_indic
  i++;
})


document.getElementById("warning_diagno").innerHTML = indic 


top.innerHTML += "<br><br><div class='col-sm-4 text-center'style='width: 21.5em;margin:15px auto;'>"+
"<button type='button' class='btn btn-lg btn-success'>Télécharger l'export PDF </button></div>"

top.innerHTML += "<br><br><h2 style='text-align: center'>Prédiction</h1><br><br>"
var node2 = document.createElement("div");  
var node3 = document.createElement("div")
node2.setAttribute("class","row")
node3.setAttribute("id","predict")
node3.setAttribute("class","card")               // Create a <li> node
         // Create a text node
                              // Append the text to <li>
node2.appendChild(node3);  
document.getElementById("main1").appendChild(node2); 

   // Append <li> to <ul> with id="myList"

       


 pred = ""
    warning_map.forEach(function(valeur, clé) {

      next_pred =  "<div class='row'>"+
                                        "<div class='card-img-top d-flex align-items-center border-secondary rounded shadow-sm col-sm-4' style='margin:10px;background-color: #D8D8D8' '>"+
                "<div>"+
                    "<img class='img-fluid' src="+ valeur[1]+ " style='width: 50px;height: 50px;padding :10px' alt='Card image cap'>"+
                "</div>"+
                "<span class='dot' style ='background-color:green'></span>"+
                "<p class='col p-2 m-0' text-center>  "+ clé + "</p>"+
                "<svg height='50' width='100'><circle id="+ 'id'+i+" cx='50' cy='25' r='10'  stroke-width='3' fill="+ valeur[0] +" /></svg>"+"</div>"+
                                    "<span class='text-center col-6 ' style='padding-top: 45px;'> "+
                                      "Attention ceci est une mise en garde ! Problems are coming !"+
                                    "</span>"+
                              "</div>"+
                          "<div>"+
                    "</div>"

      pred = pred + next_pred
    })

document.getElementById("main2").innerHTML = pred
 top = document.getElementById("main2");

fetch("https://api-adresse.data.gouv.fr/search/?q="+input+"&type=street")
  .then(response => response.json())
  .then(data => {
    data = data.features[0].geometry.coordinates
  top.innerHTML += "<br><div class='text-center'><br>"+
    	"<h1> ALLEZ PLUS LOIN AVEC CARTOSANTE </h1><br>"+
    	"<a href='https://sirse.atlasante.fr/#c=indicator' target='_blank'>"+
    	"<img style='width: 60%;height:60%' src='https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/"+data[0]+","+data[1]+",13,0.00,0.00/1000x600@2x?access_token=pk.eyJ1IjoidGhlby1vcmlvbCIsImEiOiJjazhvYTQ1YWgwMGc1M21sbTVjM3BqeWM4In0.BB4gDDk54hPCKi_FfpOXtw' ><br><br>"
});
     


	}



