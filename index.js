// SideBar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector ('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//  ============================== SideBar ==========================
//  Remove active class from all menu items 

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


//  Add active class to menu items when clicked and remove notifications popup 

menuItems.forEach(item => {    
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
          document.querySelector('.notification-popup').
          style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            item.querySelector('.notification-count')
            .style.display = 'none';
        }
        
    })
})

//  ============================== Messages ==========================
// Searches chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
      let name = chat.querySelectorAll('h5').textContent.toLowerCase();
      if (name.indexOf(val) != -1) {
        chat.style.display = 'flex';
      } else {
       chat.style.display = 'none';
      }
  })
}

// Search chat
messageSearch.addEventListener('.keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count')
    .style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);    
})
