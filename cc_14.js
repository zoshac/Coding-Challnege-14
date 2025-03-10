// Task 2 Adding support tickets 

function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketConatiner = document.getElementById("ticketContainer");

    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticketCard");
    // ticket card creation 

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = customerName;
    // customer name heading 

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = issueDescription;

    const priorityLabel = document.createElement("p");
    priorityLabel.setAttribute("class", "priorityLabel");
    priorityLabel.textContent = "Priority:" + priorityLevel;
    // priority label 

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resoleve-btn");
    // resolve button creation 

    resolveButton.addEventListener("click", function () {
        ticketConatiner.removeChild(ticketCard);
    });

    ticketCard.appendChild(nameHeading);
    ticketCard.appendChild(descriptionParagraph);
    ticketCard.appendChild(priorityLabel);
    ticketCard.appendChild(resolveButton);
    //appending elements to ticket card 

    ticketConatiner.appendChild(ticketCard);

}

// Test cases 
createSupportTicket("Preston Grant", "Unable to access account", "High");
createSupportTicket("Sierra Mist", "Password Expired", "Medium");
createSupportTicket("Anothony Parker", "Profile not Updated", "Low");
createSupportTicket("Kristina Thomas", "Payment not processed", "High");

// Task 3 adding arrays 
function highlightImportantTickets () {
    const highPriorityTickets = document.querySelectorAll('.priorityLabel');
    //selects all priority labels with high priority 

    const highPriorityArray = Array.from(highPriorityTickets);

    //styling 
    highPriorityArray.forEach(priorityLabel => {
        if (priorityLabel.textContent.includes("High")) {
            const ticketCard = priorityLabel.closest(".ticketCard");
            ticketCard.style.border = "4px solid pink";
            ticketCard.style.backgroundColor = "red";
            ticketCard.style.fontWeight = "bold";
        }
    });
}

highlightImportantTickets();

//Task 4 Ticket Resoloution 

document.addEventListener("DOMContentLoaded", function () {
    const ticketConatiner = document.getElementById("ticketContainer");

    document.querySelectorAll(".resolve-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();

            const ticketCard = this.closest(".ticketCard");
            if (ticketCard) {
                ticketCard.remolve();
                console.log("Ticket issue resolved");
            }
        })
    });
});

// event listener added to show message when is clicked 
ticketContainer.addEventListener("click", function (event) { 
    const clickedTicket = event.target.closest(".ticketCard");
    if (clickedTicket) {
        console.log("Ticket clicked:" + clickedTicket.querySelector("h4").textContent);
    }
}); 

// Task 5 Inline editing 
document.querySelectorAll('.ticketCard').forEach(ticket => {
    ticket.addEventListener('dblclick', function () {
        const name = ticket.querySelector('.ticket-title');
        const issue = ticket.querySelector('.ticket-description');
        const priority = ticket.querySelector('.priorityLabel');

        // input fields 
        const nameInput = document.createElement('input');
        nameInput.value = name.textContent;

        const issueInput = document.createElement('input');
        issueInput.value = issue.textContent;

        const priorityInput = document.createElement('input');
        priorityInput.value = priority.textContent.replace("Priority: ", "");

        // replacing static text
        name.replaceWith(nameInput);
        issue.replaceWith(issueInput);
        priority.replaceWith(priorityInput);

        // save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        ticket.appendChild(saveButton);

        saveButton.addEventListener('click', function () {
            const updatedName = document.createElement('h3');
            updatedName.classList.add('ticket-title');
            updatedName.textContent = nameInput.value;

            const updatedIssue = document.createElement('p');
            updatedIssue.classList.add('ticket-description');
            updatedIssue.textContent = issueInput.value;

            const updatedPriority = document.createElement('p');
            updatedPriority.classList.add('priorityLabel');
            updatedPriority.textContent = "Priority: " + priorityInput.value;

    
            nameInput.replaceWith(updatedName);
            issueInput.replaceWith(updatedIssue);
            priorityInput.replaceWith(updatedPriority);
            saveButton.remove();
             // removing save button
        });
    });
});
