
/*
let fileName;
const contentArea = document.querySelector('.data-content');
window.onload = onLoadPage;

function onLoadPage() {
fileName = 'About.html'
FetchFiles(fileName);
}

function ReceiveClick(op) {
    switch(op) {
        case 'About':
            fileName = 'About.html'
            break
        case 'Skills':
            console.log('Skills');
        break
        case 'Educations':
            console.log('Educations');
        break
        case 'Projects':
            console.log('Projects');
        break
        case 'Jobs':
            console.log('Jobs');
        break
    }

    FetchFiles();
}

function FetchFiles(fileName) {
    fetch(fileName)
    .then(response => {
      if (!response.ok) throw new Error('Content not found');
      return response.text();
    })
    .then(data => {
      contentArea.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
      contentArea.innerHTML = '<p>Error loading content.</p>';
    });
}
    */

function ReceiveClick(section) {
    // Scroll to the section
    const targetSection = document.getElementById(section.toLowerCase());
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }