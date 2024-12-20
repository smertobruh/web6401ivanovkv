document.querySelectorAll(".sub_form").forEach(sub_form => {
    let answer = document.getElementById("answer")
    sub_form.addEventListener("submit", event => {
        let text = answer.value;
        if (text != 590) {
            event.preventDefault();
            if(!sub_form.children[0].classList.contains("error")) {
                sub_form.prepend(createError("Неправильно"));
            }
        }
    })
});

function createError(message) {
    let error = document.createElement("h3");
    error.classList.add("error");
    error.textContent = message;
    return error
}