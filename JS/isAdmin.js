const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(currentUser.role !== 'ADMIN_ROLE') window.location.href = '/index.html';