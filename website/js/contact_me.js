/*
// Contact Form Scripts

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "/query",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $('form#contact_form').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


*/
/*When clicking on Full hide fail/success boxes *//*

$('#name').focus(function() {
    $('#success').html('');
});

$(function submitQuery(){
        name = document.getElementsByName("name")[0].value;
        message = document.getElementsByName("message")[0].value;
        //subject = document.getElementsByName("subject")[0].value;
        email = document.getElementsByName("email")[0].value;
        $.ajax({
                type: 'POST',
                url: '/query',
                data: { name : name, message: message, email:email },
                success: function() {
                          alert("Query submitted.");
                      },
               error: function(){
                      }
                  });
        });

    function submitQuery(){
    name = document.getElementsByName("name")[0].value;
	message = document.getElementsByName("message")[0].value;
	subject = document.getElementsByName("subject")[0].value;
	email = document.getElementsByName("email")[0].value;
  	$.ajax({
      		type: 'POST',
      		url: '/query',
	        data: { name : name, message: message, subject:subject, email:email },
	        success: function() {
		          alert("Query submitted.");
		      },
	       error: function(){
		      }
		  });
	}
*/
