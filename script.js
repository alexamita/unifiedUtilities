// Check for URL param ?role=manager
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const roleParam = urlParams.get('role');
  if (roleParam === 'manager') {
    setRole('manager');
  }
});

function setRole(role) {
  const isManager = role === 'manager';
  // Update Toggle UI
  document.querySelectorAll('.roleButton').forEach(button => button.classList.remove('active'));
  const buttonId = 'button' + role.charAt(0).toUpperCase() + role.slice(1);
  const activeBtn = document.getElementById(buttonId);

  if (activeBtn) activeBtn.classList.add('active');

  //Page configs
  const pages = [
    {
      wrapper: '#signUp.authPageWrapper', // Sign Up page wrapper
      titleId: 'signUpTitle',
      subtitleId: 'signUpSubtitle',
      manager: {
        title: 'CREATE YOUR MANAGER ACCOUNT',
        subtitle: 'Join Unified Utilities to streamline your property management.',
      },
      tenant: {
        title: 'CREATE YOUR TENANT ACCOUNT',
        subtitle: 'Join Unified Utilities to simplify your utility payments.',
      },
    },

    {
      wrapper: '#logIn.authPageWrapper', // Log In wrapper
      titleId: 'loginTitle',
      subtitleId: 'loginSubtitle',
      manager: {
        title: 'MANAGER LOGIN',
        subtitle: 'Welcome back! Sign in to manage your properties.',
      },
      tenant: {
        title: 'TENANT LOGIN',
        subtitle: 'Welcome back! Sign in to manage your utilities.',
      },
    },
  ];
  // Apply role to any page elements
  pages.forEach(page => {
    const wrapper = document.querySelector(page.wrapper);
    if (wrapper) {
      wrapper.classList.toggle('managerTheme', isManager);
    }

    const titleEl = document.getElementById(page.titleId);
    const subtitleEl = document.getElementById(page.subtitleId);

    const copy = isManager ? page.manager : page.tenant;

    if (titleEl) titleEl.innerText = copy.title;
    if (subtitleEl) subtitleEl.innerText = copy.subtitle;
  });
}

// Function to set the method
function setMethod(method) {
  document.querySelectorAll('.methodTab').forEach(tab => tab.classList.remove('active'));
  const tabId = 'tab' + method.charAt(0).toUpperCase() + method.slice(1);
  document.getElementById(tabId).classList.add('active');

  // Show/Hide Fields
  if (method === 'email') {
    document.getElementById('groupEmail').classList.remove('hidden');
    document.getElementById('groupPhone').classList.add('hidden');

    // Toggle Required
    document.querySelector('#groupEmail input').setAttribute('required', '');
    document.querySelector('#groupPhone input').removeAttribute('required');
  } else {
    document.getElementById('groupEmail').classList.add('hidden');
    document.getElementById('groupPhone').classList.remove('hidden');

    // Toggle Required
    document.querySelector('#groupEmail input').removeAttribute('required');
    document.querySelector('#groupPhone input').setAttribute('required', '');
  }
}


function togglePassword(button) {
  const inputWrapper = button.parentElement;
  const input = inputWrapper.querySelector('input');
  const eye = button.querySelector('.icon-eye');
  const eyeOff = button.querySelector('.icon-eye-off');

  if (input.type === 'password') {
    input.type = 'text';
    eye.classList.add('icon-hidden');
    eyeOff.classList.remove('icon-hidden');
  } else {
    input.type = 'password';
    eye.classList.remove('icon-hidden');
    eyeOff.classList.add('icon-hidden');
  }
}