     
$("#find-postcode").click(function(e) {
      
    e.preventDefault();
              
    $.ajax({            
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent($("#address").val()) + "&key=AIzaSyDRf3nr9Z8P9uEMCrTNNCxVcNd5aP1Ac4s",
        type: "GET",
        success: function (data) {
            console.log(data);
                
            if (data["status"] != "OK") {
                    
            $("#message").html('<div class="alert alert-warning" role="alert">Postcode could not be found - please try again.</div>');
                    
            } else {
                
                $.each(data["results"][0]["address_components"], function (key, value) {
                    
                    if (value["types"][0] == "postal_code") {
                        
                    $("#message").html('<div class="alert alert-success" role="alert"><strong>Postcode found!</strong> The postcode is ' + value["long_name"] + '.</div>');
                    
                    }
                })
                
            }
        }
            
    })
})
      
