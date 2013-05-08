// Project 2
// Visual Frameworks 1305
// Peter Hitchcock

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {

    // getElementsById Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    // Create Select Field Element and Populate with Options
    function makeBedrooms() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=contactGroups.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = contactGroups[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
     }
     
     // Find value of selected checkbox
     /*
     function getCheckbox() {
         var checks = document.forms[0].sfr;
         for (var i = 0; i < checks.length; i++) {
             if(checks[i].checked {
             sfrValue = checks[i].value;
             
              }   
         }
     }
     */
     function storeData() {
         var id         = Math.floor(Math.random()*10000001);
         // Get all form field values and store in object
         // Object properties contain array form label and input value
         //getCheckbox()
         var item       = {};
             item.name = ["Group", $("name").value];
             item.phone = ["First Name", $("phone").value];
             item.email = ["Email", $("email").value];
             //item.check = ["Checked", checks];
             
         // Save data to local storage Use stringify to convert object to a string
         localStorage.setItem(id, JSON.stringify(item));
         alert("Contact Saved");
                      
     }
     
     function getData() {
         //Write local data from local storage to browser
         var makeDiv = document.createElement("div");
         makeDiv.setAttribute("id", "items");
         var makeList = document.createElement("ul");
         makeDiv.appendChild(makeList);
         document.body.appendChild(makeDiv);
         for (var i = 0, len=localStorage.length; i<len; i++) {
             var makeLi = document.createElement("li");
             makeList.appendChild(makeLi);
             var key = localStorage.key(i);
             var value = localStorage.getItem(key);
             // Convert sting from local storage back to an object by using JSON.parse()
             var obj = JSON.parse(value);
             var makeSublist = document.createElement("ul");
             makeLi.appendChild(makeSublist);
             for (var n in obj) {
                 var makeSubli =document.createElement("li");
                 makeSublist.appendChild(makeSubli);
                 var optSubText = obj[n][0]+" "+obj[n][1];
                 makeSubli.innerHTML = optSubText;
                 
             }
         }
     
     }
    
    
    // Var Defaults
    var contactGroups = ["1", "2", "3"],
        checks
        ;
    makeBedrooms();
    
    
    
    
    // Set Link and Submit Click Events
    var displayData = $("displayData");
    displayData.addEventListener("click", getData);
 /*   var clearData = $("clearData");
    clearData.addEventListener("click", clearData);
*/    var save = $("submit");
    save.addEventListener("click", storeData);
    
    
    

});