const dialog=document.querySelector('dialog');
const background=document.querySelector('#bg-video');
if(matchMedia('(prefers-reduced-motion: reduce)').matches) background.pause();
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#expanded');img.src=button.dataset.image;img.alt=button.dataset.title;document.querySelector('#image-title').textContent=button.dataset.title;dialog.showModal();}));
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
