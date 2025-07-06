// Select the existing nav element
const oldNav = document.getElementById('nav-menu');

// Create a new nav element
const newNav = document.createElement('nav');
newNav.id = 'nav-menu';

// Add updated links
const links = [
  { href: 'index.html', text: 'Home' },
  { href: 'add-quote.html', text: 'Add Quote' },
  { href: 'update-quote.html', text: 'Update Quote' },
  { href: 'delete-quote.html', text: 'Delete Quote' }
];

links.forEach(linkData => {
  const a = document.createElement('a');
  a.href = linkData.href;
  a.textContent = linkData.text;
  newNav.appendChild(a);
});

// Replace the old nav with the new one
oldNav.replaceWith(newNav);
