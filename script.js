var message = document.getElementById("message")

var counter = document.getElementById("counter")

var warning = document.getElementById("warning")


function countCharacters() {

    var maxCharacters = 200

    var typedCharacters = message.value.length

    var remainingCharacters = maxCharacters - typedCharacters

    counter.textContent = typedCharacters + "/200 characters"


    if (typedCharacters === 200) {

        warning.textContent = "You have reached the character limit."

    }

    else {

        warning.textContent = ""

    }

}


message.addEventListener("input", function () {

    countCharacters()

}
)