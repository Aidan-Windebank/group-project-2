

const replyManager = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#post-parent').dataset.id;
    // console.log(id);
    // Send a POST request to the API endpoint
    // get id of
    // const response = await fetch(`/api/posts/${id}`, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    // })
    fetch(`/api/posts/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log(data.user.email)
    })
    // if (response.ok) {
    //     // alert(`The posters email is: ${response.body.user.email}`)
    //     console.log(response.json())

    // } else {
    //     alert(response.statusText);
    // }
}


document
    .querySelector('#reply-button')
    .addEventListener('click', replyManager);
