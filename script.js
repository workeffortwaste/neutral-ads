window.addEventListener('load', (event) => {
  for (const item of document.querySelectorAll('[aria-label="Ads"] a')) {
    if (item.href.includes('aclk?')) {
      item.setAttribute('style', 'text-decoration:line-through;')
      continue
    }
    item.setAttribute('data-rw', item.href)
    item.setAttribute('data-ved', '')

    if (item.children[1]) {
      item.children[1].getElementsByTagName('span')[0].innerHTML = 'Nt<span style="padding:0 5px">·</span>'
    }
  }
})
