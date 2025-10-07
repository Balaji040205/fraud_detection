function downloadResults() {
    window.location.href = '/download';
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

$(document).ready(function () {
    $('#upload-form').on('submit', function (e) {
        e.preventDefault();

        // Validation
        var zipFile = $('#zipfile').val();
        var excelFile = $('#excelfile').val();
        if (!zipFile || !excelFile) {
            alert('Please select both ZIP and Excel files.');
            return;
        }

        var formData = new FormData(this);
        $.ajax({
            url: '/submit',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.results) {
                    $('#visualization').hide();
                    $('.btn-success').hide();

                    // Results Table
                    var headers = Object.keys(response.results[0]);

                    var resultHtml = '<h3>Processed Results</h3><table class="table"><thead><tr>';
                    for (var i = headers.length - 1; i >= 0; i--) {
                        resultHtml += '<th>' + headers[i] + '</th>';
                    }
                    resultHtml += '</tr></thead><tbody>';

                    response.results.forEach(function(row) {
                        resultHtml += '<tr>';
                        for (var i = headers.length - 1; i >= 0; i--) {
                            resultHtml += '<td>' + row[headers[i]] + '</td>';
                        }
                        resultHtml += '</tr>';
                    });
                    resultHtml += '</tbody></table>';

                    $('#results').html(resultHtml);

                    $('#visualization').show();
                    $('.btn-success').show();
                } else {
                    $('#results').html('<p>No results found.</p>');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                alert('Error: ' + error);
            },
        });
    });

    // Contact form validation
    $('form[action="/submit-contact"]').on('submit', function (e) {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (!name) {
            alert('Please enter your name.');
            e.preventDefault();
            return;
        }
        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
            return;
        }
        if (!message) {
            alert('Please enter your message.');
            e.preventDefault();
            return;
        }
        // If valid, submit normally
    });
});
