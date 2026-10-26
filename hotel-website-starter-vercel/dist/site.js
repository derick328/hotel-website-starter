const hotel = window.HOTEL;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

document.querySelectorAll('[data-name]').forEach(el => el.textContent = hotel.name);
document.querySelector('[data-monogram]').textContent = hotel.monogram;
document.querySelectorAll('[data-text]').forEach(el => {
  const value = hotel[el.dataset.text];
  if (typeof value === 'string') el.textContent = value;
});
document.querySelectorAll('[data-image]').forEach(el => {
  const value = hotel.images[el.dataset.image];
  if (value) el.src = value;
  const alt = hotel.imageAlt?.[el.dataset.image];
  if (alt) el.alt = alt;
});
document.title = `${hotel.name} — ${hotel.pageTitle}`;
document.querySelector('meta[name="description"]').content = `${hotel.name}: ${hotel.heroDescription}`;
document.querySelector('.brand').setAttribute('aria-label', `${hotel.name}, back to top`);
document.querySelector('#year').textContent = new Date().getFullYear();

const roomTrack = document.querySelector('#room-track');
roomTrack.innerHTML = hotel.rooms.map(room => `<article class="room-card"><img src="${escapeHtml(room.image)}" alt="${escapeHtml(room.alt)}" loading="lazy"><div class="room-card-body"><span class="room-type">${escapeHtml(room.type)}</span><h3>${escapeHtml(room.name)}</h3><p>${escapeHtml(room.description)}</p><a href="#booking">Explore this room <span aria-hidden="true">↗</span></a></div></article>`).join('');
document.querySelector('#rooms-prev').addEventListener('click', () => roomTrack.scrollBy({left:-roomTrack.querySelector('.room-card').offsetWidth-22,behavior:'smooth'}));
document.querySelector('#rooms-next').addEventListener('click', () => roomTrack.scrollBy({left:roomTrack.querySelector('.room-card').offsetWidth+22,behavior:'smooth'}));
document.querySelector('#feature-list').innerHTML = hotel.features.map(feature => `<div class="feature"><span class="feature-number">${escapeHtml(feature.number)}</span><div><h3>${escapeHtml(feature.title)}</h3><p>${escapeHtml(feature.text)}</p></div></div>`).join('');
document.querySelector('#faq-list').innerHTML = hotel.faqs.map(item => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('');

const links = document.querySelector('#contact-links');
links.innerHTML = '';
if (hotel.email) links.insertAdjacentHTML('beforeend', `<a href="mailto:${encodeURIComponent(hotel.email)}">${escapeHtml(hotel.email)}</a>`);
if (hotel.phone) links.insertAdjacentHTML('beforeend', `<a href="tel:${escapeHtml(hotel.phone.replace(/[^+\d]/g,''))}">${escapeHtml(hotel.phone)}</a>`);
if (hotel.mapUrl) links.insertAdjacentHTML('beforeend', `<a href="${escapeHtml(hotel.mapUrl)}" target="_blank" rel="noopener noreferrer">Find us on the map ↗</a>`);
if (hotel.instagramUrl) links.insertAdjacentHTML('beforeend', `<a href="${escapeHtml(hotel.instagramUrl)}" target="_blank" rel="noopener noreferrer">Instagram ↗</a>`);
if (!links.children.length) links.innerHTML = '<span class="footer-muted">Contact details coming with the hotel.</span>';

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = () => { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open menu'); mobileNav.hidden = true; document.body.classList.remove('menu-open'); };
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Close menu':'Open menu'); mobileNav.hidden = !open; document.body.classList.toggle('menu-open',open); });
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });

const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');
const localDate = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const today = new Date();
checkin.min = localDate(today);
checkin.value = localDate(today);
const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1);
checkout.min = localDate(tomorrow);
checkout.value = localDate(tomorrow);
checkin.addEventListener('change', () => { const date = new Date(`${checkin.value}T12:00:00`); date.setDate(date.getDate()+1); checkout.min = localDate(date); if (checkout.value < checkout.min) checkout.value = checkout.min; });
const dialog = document.querySelector('#booking-dialog');
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  if (checkout.value <= checkin.value) { checkout.setCustomValidity('Check out must be after check in.'); checkout.reportValidity(); return; }
  checkout.setCustomValidity('');
  if (hotel.bookingUrl) {
    const url = new URL(hotel.bookingUrl, window.location.href);
    url.searchParams.set('checkin', checkin.value);
    url.searchParams.set('checkout', checkout.value);
    url.searchParams.set('guests', document.querySelector('#guests').value);
    window.location.href = url.toString();
    return;
  }
  const guestCount = document.querySelector('#guests').value;
  const format = value => new Date(`${value}T12:00:00`).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  document.querySelector('#booking-summary').textContent = `${format(checkin.value)} to ${format(checkout.value)} · ${guestCount} ${guestCount === '1'?'guest':'guests'}`;
  dialog.showModal();
});
checkout.addEventListener('change', () => checkout.setCustomValidity(''));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if(e.target === dialog) dialog.close(); });
