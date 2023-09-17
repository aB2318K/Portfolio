document.addEventListener('DOMContentLoaded', function() {
    let projectsList = document.getElementById('projectsList');
    if (projectsList) {
      projectsList.style.display = 'none';
    }
  });

function showlist() {
    let projectsList = document.getElementById('projectsList');
    if (projectsList.style.display === 'none') {
        projectsList.style.display = 'block';
        document.getElementById('projectsHeading').querySelector('.arrow').innerHTML = '▼';
    } else {
      projectsList.style.display = 'none';
      document.getElementById('projectsHeading').querySelector('.arrow').innerHTML = '▶';
    }
    }


document.getElementById('projectsHeading').onclick = showlist;
document.getElementById('projectsHeading').onmouseenter = document.getElementById('projectsHeading').style.cursor = 'pointer';

function projectDes () {
    let mm = document.getElementById('mm');
        mm.style.color = 'white';
        mm.style.backgroundColor = 'black';
        mm.style.width = '100%';
        mm.innerHTML = 'This program generates random training schedule for random day.';

    }
document.getElementById('mm').onmouseenter = projectDes;
document.getElementById('mm').onmouseleave = function() {
    let mm = document.getElementById('mm');
    mm.style.color = '';
    mm.style.backgroundColor = '';
    mm.style.width = '';
    mm.innerHTML = 'Mixed Messages';
  };
  

  