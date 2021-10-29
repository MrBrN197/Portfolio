const modalHTML = `
<div id="close">
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
      fill="#93A79D" />
  </svg>
</div>
<nav>
  <ul>
    <li>
      <a href="#recent-works-start">Portfolio</a>
    </li>
    <li>
      <a href="#about-start">About</a>
    </li>
    <li>
      <a href="#contact-start">Contact</a>
    </li>
  </ul>
</nav>`;

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.innerHTML = modalHTML;

  const close = modal.querySelector('#modal #close');
  close.addEventListener('click', () => {
    modal.style.opacity = 0;
    modal.style.zIndex = -1000;
    document.body.removeChild(modal);
  });

  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    modal.style.opacity = 1;
    modal.style.zIndex = 1000;
    document.body.appendChild(modal);
  });

  const listItems = modal.querySelectorAll('#modal nav ul li');

  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      modal.style.opacity = 0;
      modal.style.zIndex = -1000;
      document.body.removeChild(modal);
    });
  });

  const projectContent = [
    {
      featuredImage: './images/project-1.png',
      description: 'A Simple To-Do App to keep track of your tasks using Javscript and the Jest Framework for testing and localStorage API',
      name: 'A Simple To-Do App to keep track of your tasks',
      technologies: ['CSS', 'JavaScript'],
      links: ['https://mrbrn197.github.io/Todo-Project/dist', 'https://github.com/MrBrN197/Todo-Project'],
    },
    {
      featuredImage: './images/leaderboard.png',
      description: 'Leaderboard is a website that displays scores submitted by different players. It also allows you to submit your score',
      name: 'Leaderboard APP',
      technologies: ['JavaScript', 'SCSS', 'Webpack'],
      links: ['https://mrbrn197.github.io/Leaderboard/dist', 'https://github.com/MrBrN197/Leaderboard'],
    },
    {
      featuredImage: './images/project-3.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit quis qui distinctio repellendus vel nihil eveniet autem modi! Beatae dignissimos reiciendis non quas earum amet ipsam nesciunt a, dolores, repellendus rem quae distinctio modi eveniet. Molestiae, obcaecati et dolorem nobis velit laboriosam odit nemo neque totam magnam provident ratione!',
      name: 'Project 3',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      links: ['https://mrbrn197.github.io/Portfolio', 'https://github.com/MrBrN197/Portfolio'],
    },
    {
      featuredImage: './images/project-4.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit quis qui distinctio repellendus vel nihil eveniet autem modi! Beatae dignissimos reiciendis non quas earum amet ipsam nesciunt a, dolores, repellendus rem quae distinctio modi eveniet. Molestiae, obcaecati et dolorem nobis velit laboriosam odit nemo neque totam magnam provident ratione!',
      name: 'Project 4',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      links: ['https://mrbrn197.github.io/Portfolio', 'https://github.com/MrBrN197/Portfolio'],
    },
    {
      featuredImage: './images/project-5.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit quis qui distinctio repellendus vel nihil eveniet autem modi! Beatae dignissimos reiciendis non quas earum amet ipsam nesciunt a, dolores, repellendus rem quae distinctio modi eveniet. Molestiae, obcaecati et dolorem nobis velit laboriosam odit nemo neque totam magnam provident ratione!',
      name: 'Project 5',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      links: ['https://mrbrn197.github.io/Portfolio', 'https://github.com/MrBrN197/Portfolio'],
    },
    {
      featuredImage: './images/project-6.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit quis qui distinctio repellendus vel nihil eveniet autem modi! Beatae dignissimos reiciendis non quas earum amet ipsam nesciunt a, dolores, repellendus rem quae distinctio modi eveniet. Molestiae, obcaecati et dolorem nobis velit laboriosam odit nemo neque totam magnam provident ratione!',
      name: 'Project 6',
      technologies: ['Ruby on rails', 'css', 'JavaScript'],
      links: ['https://mrbrn197.github.io/Portfolio', 'https://github.com/MrBrN197/Portfolio'],
    },
  ];

  document.querySelectorAll('.see-project').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const projectModal = document.getElementById('project-modal');
      projectModal.style.display = 'block';

      const projectDetails = projectContent[idx];

      const featuredImage = projectModal.querySelector('img');
      featuredImage.src = projectDetails.featuredImage;
      const description = projectModal.querySelector('.description');
      description.textContent = projectDetails.description;
      const name = projectModal.querySelector('.heading');
      name.textContent = projectDetails.name;

      const badges = projectModal.querySelector('.badges');
      badges.innerHTML = '';
      projectDetails.technologies.forEach((tech) => {
        const li = document.createElement('li');
        li.textContent = tech;
        li.classList.add('badge');
        badges.appendChild(li);
      });

      projectModal.querySelectorAll('.options .button').forEach((x, idx) => {
        x.href = projectDetails.links[idx % 2];
      });
    });
  });

  const projectClose = document.querySelector('#project-modal #close');
  projectClose.addEventListener('click', () => {
    const projectModal = document.querySelector('#project-modal');
    projectModal.style.display = 'none';
  });

  const form = document.querySelector('#contact-start form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.email;
    const email = emailInput.value;

    if (email.toLowerCase() !== email) {
      const errorMessage = form.querySelector('#error-message');
      // console.log(errorMessage);
      errorMessage.textContent = 'Error: Email should be lowercase';
    } else {
      form.submit();
    }
  });

  const storageAvailable = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
      // everything except Firefox
        e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
    }
  };

  if (storageAvailable('localStorage')) {
    const storageName = 'inputDetails';

    let inputDetails = {};
    if (!localStorage.getItem(storageName)) {
      inputDetails = {
        'full-name': '',
        email: '',
        message: '',
      };
    } else {
      inputDetails = JSON.parse(localStorage.getItem(storageName));

      form['full-name'].value = inputDetails['full-name'];
      form.email.value = inputDetails.email;
      form.message.value = inputDetails.message;
    }

    const inputs = [form['full-name'], form.email, form.message];

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        inputDetails[input.name] = input.value;
        localStorage.setItem(storageName, JSON.stringify(inputDetails));
      });
    });
  }
});