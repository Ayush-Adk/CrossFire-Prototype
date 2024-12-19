document.addEventListener("DOMContentLoaded", () => {


    var carRaised = document.getElementById('carRaised');
    var carNumber = document.getElementById('carNumber');
    var followUp = document.getElementById('followUp');
    var followUpType = document.getElementById('followUpType');
    var followUpDate = document.getElementById('followUpDate');
    var reInspected = document.getElementById('reInspected');
    var newNcr = document.getElementById('newNcr');



        carRaised.addEventListener('change', function() {
            if (carRaised.value == 'yes') 
            {
                
                carNumber.disabled = false;  
            } else {
                carNumber.value="";
                carNumber.disabled = true;   
            }
        });



        followUp.addEventListener('change', function() {
            if (followUp.value === 'yes')
             {
               
                followUpType.disabled = false;  
                followUpDate.disabled = false;  
            } else {
                followUpType.value = '';  
                followUpDate.value = ''; 
                followUpType.disabled = true;   
                followUpDate.disabled = true;   
            }
        });

        reInspected.addEventListener('change', function() {
                if (reInspected.value == 'No') 
                {
                    
                    newNcr.disabled = false; 
                    newNcr.value="2024-1111"; 
                } else {
                    newNcr.value="";
                    newNcr.disabled = true;   
                }
            });

    // Add modal
    document.querySelector(".ncr-modal").innerHTML = `
        <div class="ncr-modal-content">
            <div class="ncr-modal-top d-flex justify-content-end">
                <button class="btn btn-red modal-close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="ncr-modal-body">
                <p class="ncr-modal-title fs-5">Are you sure you want to submit this NCR?</p>
                <div class="ncr-modal-main mt-5"></div>
                <div class="ncr-modal-footer mt-5">
                    <!-- Cancel -->
                    <Button class="btn btn-red" id="btn-cancel">Cancel</Button>
                    <!-- OK -->
                    <Button class="btn btn-green" id="btn-ok">OK</Button>
                </div>
            </div>
        </div>`

    let part1 = document.querySelector("#part-1")
    let part2 = document.querySelector("#part-2")
    let part3 = document.querySelector("#part-3")
    let form2 = document.querySelector("#ncr-form-part2")
    let save = document.querySelector("#btn-save")
    let submit = document.querySelector("#btn-submit")
    let modal = document.querySelector(".ncr-modal")
    let cancel = document.querySelector("#btn-cancel")
    let ok = document.querySelector("#btn-ok")
    let msgBox = document.querySelector("#msg-box")


    

    // Save button pressed => Saved message
    save.addEventListener("click", () => {
        part1.style.display = "none"
        part2.style.display = "none"
        part3.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>Form saved!</h2>`
        msgBox.querySelector("#text").innerHTML = `You can continue editing this NCR later.`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="purchasing-edit.html">
                Continue Editing
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="purchasing-list.html">
                See Your NCRs List
            </a>`
    })

    // Modal close
    modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Submit button
    submit.addEventListener("click", () => {

        // Validate form2
        if (!form2.checkValidity()) {
            // If part2 is invalid, scroll to the first invalid field and show validation messages
            const firstInvalidElement2 = form2.querySelector(":invalid");
            firstInvalidElement2.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
                form2.reportValidity(); // This will trigger the browser's built-in validation message
            }, 400);
            return; // If form2 is invalid, stop further submission
        }

        // If both forms are valid, show the confirmation modal
        modal.style.display = "block";
    })

    // Modal cancel button
    cancel.addEventListener("click", () => {
        modal.style.display = "none"
    })

    // Modal OK button => Submit
    ok.addEventListener("click", () => {
        modal.style.display = "none"
        part1.style.display = "none"
        part2.style.display = "none"
        part3.style.display = "none"
        msgBox.style.display = "block"
        msgBox.querySelector("#title").innerHTML = `<h2><i class="fa-regular fa-circle-check me-3"></i>NCR submitted!</h2>`
        msgBox.querySelector("#text").innerHTML = `<i class="fa-regular fa-paper-plane me-2 text-mid-blue"></i><strong>The NCR (2024-0107) has been completed, and relevant personnel have been notified via email.</strong>`
        msgBox.querySelector("#btns").innerHTML = `
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="purchasing-details-part3.html">
                See Details
            </a>
            <a class="btn bg-mid-blue d-block mt-4 mx-auto btn-wide" href="purchasing-list.html">
                See Your NCRs List
            </a>`
    })








})
