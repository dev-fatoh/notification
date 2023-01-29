const btn = document.getElementById('btn');
const items = document.querySelectorAll('li.unread');
const count = document.querySelector('.count');
const redSign = document.querySelectorAll('.active');
count.innerHTML = redSign.length;


btn.addEventListener('click', updateNotification);

//update read notification

function updateNotification() {
  items.forEach((item) => {
    item.classList.add('read');
    item.classList.remove('unread');
    count.innerHTML=0;
    localStorage.setItem("name","fathi")

    
    redSign.forEach((y) => {
      y.classList.remove('active');
      y.classList.add('hidden');
    });
  });
}
