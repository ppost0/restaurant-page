function createContactSection() {
  const contactSection = document.createElement('section');
  const contactInfo = document.createElement('div');
  const phone = document.createElement('div');
  const address = document.createElement('div');

  phone.textContent = 'PHONE: (718) 484 9900';
  address.textContent = 'ADDRESS: 34-63 37th Ave, Long Island City, NY 11101';
  contactInfo.classList.add('contact');

  contactInfo.appendChild(phone);
  contactInfo.appendChild(address);
  contactSection.appendChild(contactInfo);

  return contactSection;
}


function loadContact() {
  const main = document.getElementById('main');
  const contact = createContactSection();
  main.textContent = '';
  main.appendChild(contact);
}



export default loadContact;