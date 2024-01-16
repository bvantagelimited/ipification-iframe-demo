$(() => {
  console.log('login page')

  window.document.addEventListener('ip-callback', (e) => {
    $('.ip-iframe').remove();
    const data = e.detail || {};
    const { code, error } = data;
    console.log('ip-callback data', data)
    if(code) {
      alert("code: " + code)
    } else if(error) {
      alert("error: " + error)
    }
  }, false)

  $('.btn-login').on('click', () => {
    // add jframe to page
    const auth_url = 'https://stage.ipification.com/auth/realms/ipification/protocol/openid-connect/auth';
    const redirect_uri = 'http://localhost:3000/callback';
    const client_id = 'xxx'; // change to your client_id
    const state = 'wJXq12L5GJSAZuOrk2SNl1U9409iK4KqW8eXBKR';
    const scope = 'openid%20ip%3Aphone';
    const url = `${auth_url}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&ui_locales=en`;
    $('<iframe>', {src: url, class: 'ip-iframe', style: 'display: none'}).appendTo('body');
  })
})
