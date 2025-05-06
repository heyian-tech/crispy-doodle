var messageDelay = 2000;  // How long to display status messages (in milliseconds)

// Init the form once the document is ready
$( init );


// Initialize the form

function init() {

  // Hide the form initially.
  // Make submitForm() the form's submit handler.
  // Position the form so it sits in the centre of the browser window.
  $('#contactForm').show().on( 'submit', submitForm ).addClass( 'positioned' );

  // When the "Send us an email" link is clicked:
  // 1. Fade the content out
  // 2. Display the form
  // 3. Move focus to the first field
  // 4. Prevent the link being followed

  $('a[href="#contactForm"]').on( 'click', function() {
    $('#contactForm').fadeTo( 'slow', .2 );
    $('#contactForm').fadeIn( 'slow', function() {
      $('#senderName').focus();
    } )

    return false;
  } );
  
}


// Submit the form via Ajax

function submitForm() {
  var contactForm = $(this);

  // Are all the fields filled in?

  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {

    // No; display a warning message and return to the form
    $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
    contactForm.fadeOut().delay(messageDelay).fadeIn();

  } else {

    // Yes; submit the form to the PHP script via Ajax

    $('#sendingMessage').fadeIn();
    contactForm.fadeOut();

    $.ajax( {
      url: contactForm.attr( 'action' ) + "?ajax=true",
      type: contactForm.attr( 'method' ),
      data: contactForm.serialize(),
      success: submitFinished
    } );
  }

  // Prevent the default form submission occurring
  return false;
}


// Handle the Ajax response

function submitFinished( response ) {
  response = $.trim( response );
  $('#sendingMessage').fadeOut();

  if ( response == "success" ) {

    // Form submitted successfully:
    // 1. Display the success message
    // 2. Clear the form fields
    // 3. Fade the content back in

    $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#senderName').val( "" );
    $('#senderEmail').val( "" );
    $('#message').val( "" );

    $('#contactForm').delay(messageDelay+500).fadeIn();

  } else {

    // Form submission failed: Display the failure message,
    // then redisplay the form
    $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#contactForm').delay(messageDelay+500).fadeIn();
  }
}

$(document).ready(function() {
  $('#freescoutForm').on('submit', function(e) {
      e.preventDefault();

      const formData = {
          name: $('#freescoutName').val(),
          email: $('#freescoutEmail').val(),
          subject: $('#freescoutSubject').val(),
          message: $('#freescoutMessage').val()
      };

      $('#freescoutSubmit').prop('disabled', true).text('Sending...');

      $.ajax({
          url: 'php/freescout.php',
          type: 'POST',
          data: formData,
          success: function(response) {
              const res = JSON.parse(response);
              if (res.status === 'success') {
                  $('#freescoutResponse').text(res.message).css('color', 'green').show();
                  $('#freescoutForm')[0].reset();
                  alert('Your message has been sent successfully!');
              } else {
                  $('#freescoutResponse').text(res.message).css('color', 'red').show();
              }
          },
          error: function() {
              $('#freescoutResponse').text('An error occurred. Please try again later.').css('color', 'red').show();
          },
          complete: function() {
              $('#freescoutSubmit').prop('disabled', false).text('Send Message');
          }
      });
  });
});