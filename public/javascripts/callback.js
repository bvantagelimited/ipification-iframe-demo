$(() => {
  console.log('callback page')
  const code = $('.callback-response').attr('data-code');
  const error = $('.callback-response').attr('data-error');

  var data = { code, error }
  var event = new CustomEvent('ip-callback', { detail: data })
  if(window.parent && window.location.host === window.parent.location.host) {
    console.log('send event to parent')
    window.parent.document.dispatchEvent(event)
  }
})