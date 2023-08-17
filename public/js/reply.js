var postModal = document.getElementById('postModal');
	    var postModalHeader = document.getElementById('modal-title');
	    var postModalText = document.getElementById('modal-text');
const replyManager = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#post-parent').dataset.id;
   
    fetch(`/api/posts/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log(data.user.email)
	    postModalHeader.textContent = `${data.title} chosen!`;
	    postModalText.innerText = `Thank you for showing in ${data.title}  to learn more about this product contact the poster at ${data.user.email}!`;
    postModal.style.display = "block";
    postModal.classList.add("show")
    })
}
const closeModal = () =>{
    postModal.classList.remove("show");
}
document
    .querySelector('#reply-button')
    .addEventListener('click', replyManager);
document.querySelector('#modal-close').addEventListener('click',closeModal);