$(document).ready(function () {
    $('#command').focus()
    // keep the cursor in the command line, unless the player is selecting text
    $(document).on('click', function () {
        if (window.getSelection().toString() === '') {
            $('#command').focus()
        }
    })
    // clicking into the command line always puts the cursor at the end of the text
    $('#command').on('mousedown', function (event) {
        event.preventDefault()
        const end = this.value.length
        this.focus()
        this.setSelectionRange(end, end)
    })
    // keys that would move the cursor away from the end of the text are disabled
    const cursorKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown']
    $('#command').on('keydown', function (event) {
        const selectAll = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'a'
        if (cursorKeys.includes(event.key) || selectAll) {
            event.preventDefault()
        }
    })
    // the blinking cursor is drawn by CSS, so it needs to know how long the text is
    function updateCursorPosition() {
        $('#commandForm').css('--cursor-chars', $('#command').val().length)
    }
    $('#command').on('input', updateCursorPosition)
    $(window).on('focus', function () {
        $('#command').focus()
    })
    $('#commandForm').submit(function (event) {
        event.preventDefault()
        $.ajax({
            url: '/command',
            data: { command: $('#command').val() },
        }).done(function (data) {
            if (console && console.log) {
                console.log('Sample of data--:', data.slice(0, 100))
            }
            $('#gameInfo').html(data)
            $('#command').val('')
            updateCursorPosition()
        })
    })
})
