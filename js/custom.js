$(document).ready(function (){
	//alert("hey");
	

  	$("#newbutton").click(function(e){
  		e.preventDefault();
  		// code
  		var qualitraceCode = $("#qualitraceCode").val();
  		$this = $(this);
  		$this.text("Verifying")

		SDK.queryData("qualitraceApi", "qualitrace_verification_codes", { where: ["code," + qualitraceCode]}, function(response){
			results = response.payload.results;
			if (results.length > 0) {
				// Authentic
				console.log("Authentic", results)
				//alert("Authentic")
				$this.text("Authentic!!")

			} else {
				// 
				console.log("Fake!", results)
				//alert("fake")
				$this.text("Fake!!")
			};
	  	});
  		
  	})

})