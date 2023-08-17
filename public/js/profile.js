const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();
  const price = document.querySelector('#post-price').value.trim();
  const category_id = document.querySelector('#category_id').value;
  
  if (title && description && price && category_id) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({title, description, price, category_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#delete-button')
  .addEventListener('click', delButtonHandler);
