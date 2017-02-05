$(document).ready(function() {
  console.log("main.js is working");

// 1. Select the element that contains the profile image (hint: look for the class).  Change the `src` attribute so it points to a picture of your choosing instead (hint: use [attr()](http://api.jquery.com/attr/)).
//   PROTIP: use the inspector to learn the dimensions of the current profile image and use a placeholder image service such as [Place Kitten](https://placekitten.com/) to get an image of the same size.


// This will *retrieve* the `src` attribute from the `.profile-image`:
// $( '.profile-image' ).attr( 'src' );

$( '.profile-image' ).attr("src" , "https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG" );

// 2. Use the same approach to select the element that contains the photo of the sky and change the `src` attribute to another picture URL of your choosing.
//

$( '.photography' ).attr("src" , "http://animal-dream.com/data_images/tiger/tiger8.jpg" );



// 3. Select the heading that says "Panda the Bear" and change it to your own name. (hint: use [text()](http://api.jquery.com/text/))

$( 'h1.highlight' ).text('Hamza the student')





//
// 4. Select the heading that says "Employment" and change it to something else. (hint: use a [descendant selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors))

$( '#employment h3').text('Hamza')


//



// 5. Panda the Bear is lying about their skills!  Take the "time travel" skill off the page to satisfy your personal sense of justice.  Use your googling and docs-skimming skillz to find a jQuery function that will allow you to remove elements from the DOM.  (hint: there are multiple ways of doing this, but the [parent()](http://api.jquery.com/parent/) function might be useful when it comes to selecting the right element)

$( '#time-travel' ).parent().remove();

//
// 6. Change the colour of the body. (hint: use [css()](http://api.jquery.com/css/))
//


$( 'body').css('background' , 'black')


// 7. Change the colour used by the `highlight` class.

$( '.highlight')

//
// 8. Change the font family of the h1 to 'monospace'.
//
// 9. Find a way to select the round icons in the sidebar and then change their colour.
//
// 10. Scroll down to the contact form.  Change the placeholder attribute of the name field to "identify yourself".
//
// 11. Change the placeholder attribute of the message field to "state your business".
//
// 12. Give the name field [a "value" attribute](http://www.w3schools.com/tags/att_input_value.asp) of "your nemesis".
//
// 13. Change the value attribute of the email field to "koalathebear@gmail.com".
//
// 14. Change the value of the submit button on the contact form to "En garde!".
//
//   Bonus points: try experimenting with both the attr() function and the val() function to find different ways of doing this.
//
// 15. We should stop Koala from sending an email to Panda that they might regret!  Find a way to disable the submit button (hint: familiarize yourself with the [disabled attribute](http://www.w3schools.com/tags/att_input_disabled.asp)).
//
// 16. We should help Panda protect their privacy by clearing their personal details from the sidebar.  You can use [empty()](https://api.jquery.com/empty/) to do this.

});
