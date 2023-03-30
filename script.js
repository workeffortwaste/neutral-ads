window.addEventListener('load', (event) => {
  /* Style URLS we can't resolve to the untracked address */
  const styles = `
  <style>
    a[href*="aclk?"] span,
    a[href*="aclk?"],
    a[href*="aclk?"] + a
     {
      text-decoration:line-through!important;
    }

    .nt-logo{
      position:relative;
    }
    .nt-logo:after{
      display: flex;
      place-content: center;
      width: 100%;
      height: 100%;
      outline: 2px solid black;
      border: 4px solid #eff0f1;
      background: #ffffffc7;
      border-radius: 100%;
      outline-offset: -1px;
      top: -4px;
      position: absolute;
      left: -4px;
      align-items: center;
      font-weight: 600;
      color: black;
    }
  </style>`

  document.head.insertAdjacentHTML('beforeEnd', styles)

  for (const item of document.querySelectorAll('[aria-label="Ads"] div:not(.pla-unit) a:not([data-merchant-id])')) {
    /* Skip URLS we can't resolve to the untracked address */
    if (item.href.includes('aclk?')) continue
      
    /* Remove tracking URL */
    item.setAttribute('data-rw', item.href)
    item.setAttribute('data-ved', '')

    /* Add NT logo for older google search layout */
    if (item.children[2]) {
      item.children[2].getElementsByTagName('span')[0].innerHTML = 'Nt<span style="padding:0 5px">·</span>'
    }

    if (item.children[1]?.querySelector('img')) {
      const wrapper = item.children[1]?.querySelector('img').parentElement
      wrapper.classList.add('nt-logo')
    }
  }
})
