

const replyManager = async (event) => {

    const id = document.querySelector('#post-id').value.trim();;
    event.preventDefault();
    // Send a POST request to the API endpoint
    // get id of
    const response = await fetch(`/api/posts/:${id}`, {
        method: 'GET',
        // body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert(`The posters email is: ${response.body.user.email}`)

    } else {
        alert(response.statusText);
    }
}


document
    .querySelector('#reply-button')
    .addEventListener('click', replyManager);
