$(function() {

    $("#mc-embedded-subscribe-form input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#emailsub").val();

            $.ajax({
                url: "./mail/subscribe.php",
                type: "POST",
                data: {
                    email: email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#subscribe').html("<div class='alert alert-success'>");
                    $('#subscribe > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribe > .alert-success')
                        .append("<strong>Thank you for subscribing to our emials. </strong>");
                    $('#subscribe > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#subscribe').html("<div class='alert alert-danger'>");
                    $('#subscribe > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribe > .alert-danger').append("<strong>Sorry, it seems that my server is not responding. Please try again later!");
                    $('#subscribe > .alert-danger').append('</div>');
                    //clear all fields
                    $('#subscribe-contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
