$(document).ready(function() {
  // Handle tab click within each tabber container
  $('.tabber').each(function() {
    var $tabber = $(this); // Current tabber container

    $tabber.find('.tabber__tab').click(function(e) {
      e.preventDefault();

      // Remove the 'aria-selected' attribute from all tabs within this tabber
      $tabber.find('.tabber__tab').attr('aria-selected', 'false');

      // Hide all panels within this tabber
      $tabber.find('.tabber__panel').attr('aria-hidden', 'true');

      // Show the clicked panel within this tabber
      var target = $(this).attr('aria-controls');
      $tabber.find('#' + target).attr('aria-hidden', 'false');

      // Set clicked tab as active
      $(this).attr('aria-selected', 'true');
    });
  });
});
