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

function projectDes2 () {
  let jam = document.getElementById('jam');
      jam.style.color = 'white';
      jam.style.backgroundColor = 'black';
      jam.style.width = '100%';
      jam.innerHTML = 'This program lets you make a playlist and save it to your spotify.';
    }
  
document.getElementById('jam').onmouseenter = projectDes2;
document.getElementById('jam').onmouseleave = function() {
   let jam = document.getElementById('jam');
       jam.style.color = '';
       jam.style.backgroundColor = '';
       jam.style.width = '';
       jam.innerHTML = 'Jamming';
      };

  
