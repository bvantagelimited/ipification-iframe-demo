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
    const state = btoa(Math.random()).slice(0, 10); // random string
    const scope = encodeURIComponent('openid ip:phone_verify');
    const phone_number = $("#phone-number").val();

    if(!phone_number || phone_number === '') {
      alert('Please input phone number');
      return;
    }

    const url = `${auth_url}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&ui_locales=en&login_hint=${phone_number}`;
    $('<iframe>', {src: url, class: 'ip-iframe', style: 'display: none'}).appendTo('body');
  })
})
