$(document).ready(function () {
    // Function to calculate total cost
    function calculateTotal() {
        var hours = $('#hours').val(); // Get the number of hours from input
        var rate = $('#rate').val(); // Get the hourly rate (fixed in this case)

        // Check if hours is a positive number
        if (hours > 0) {
            var total = hours * rate; // Calculate the total cost
            $('#total').val(); // Set the calculated total and format to 2 decimal places
        } else {
            alert('Please enter a positive number of hours.'); // Alert if hours is not positive
            $('#hours').val(''); // Clear the hours input
            $('#total').val(''); // Clear the total box
        }
    }

    // Event handler for the calculate button
    $('#serviceCalculator button').click(function () {
        calculateTotal(); // Call calculateTotal function when button is clicked
    });
});
