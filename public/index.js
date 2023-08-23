const IconButton = document.querySelectorAll('.descr_info-wrapper__text-li');
const InfoRequier = document.querySelectorAll('.all')
IconButton.forEach((a, i) => {
  a.addEventListener('click', () => {
    if(a.classList.contains('active'))  return
      IconButton.forEach((a) => a.classList.remove('active'));
      InfoRequier.forEach((b) => b.classList.remove('opacify'));
    a.classList.add('active')
    InfoRequier[1 - i].classList.add('opacify')
  })
})
