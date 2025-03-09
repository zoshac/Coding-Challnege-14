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