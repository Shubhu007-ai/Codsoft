 // Simple interaction: Alert on form submission
        const form = document.querySelector("form");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thanks for reaching out! I will get back to you soon.");
            form.reset();
        });