const messages = [
  `
    <div class="title-block">
      <p class="subtitle">My Portfolio</p>
      <h1 class="title-main">Orion Rising</h1>
    </div>
    <div class="body-block">
      <p class="crawl-paragraph">My name is Tiberius James and I am a software engineer based out of West Des Moines, Iowa. I love creating and learning new things!</p>
      <p class="crawl-paragraph">Everything shown here on this site was developed and coded by me, with some assistance from a group of developers that I worked with while attending the Hack Reactor Bootcamp.</p>

      <p class="crawl-paragraph">I have over 630 hours completed in Advanced Software Engineering from Hack Reactor Bootcamp. I am proficient in Python, PostgreSQL, HTML/CSS, JavaScript, React, FastAPI, Agile Development, Object Oriented Programming, Git, and DOM Manipulation.</p>
      <p class="crawl-paragraph">See my Contact Me page for more information!</p>
    </div>
  `
];

let index = 0;
const crawlEl = document.querySelector('.crawl');

function startCrawl(msg) {
  crawlEl.style.animation = 'none';
  void crawlEl.offsetWidth;
  crawlEl.innerHTML = msg;
  crawlEl.style.animation = 'crawl 50s linear forwards';
}

startCrawl(messages[index]);

setInterval(() => {
  index = (index + 1) % messages.length;
  startCrawl(messages[index]);
}, 37000); // every 35 seconds


<script>
document.addEventListener('DOMContentLoaded', () =&gt; {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form) {
    console.error('Contact form not found!');
    return;
  &rbrace;

  form.addEventListener('submit', async (e) =&gt; {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      if (statusEl) statusEl.textContent = 'Please fill in all fields.';
      return;
    &rbrace;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://orionrising.pythonanywhere.com/api/contact', {
        method: 'POST',
        body: formData
      &rbrace;);

      if (response.ok) {
        if (statusEl) statusEl.textContent = 'Message sent!';
        form.reset();
      &rbrace; else {
        if (statusEl) statusEl.textContent = 'Failed to send message.';
      &rbrace;
    &rbrace; catch (err) {
      console.error('Error:', err);
      if (statusEl) statusEl.textContent = 'Error sending message.';
    &rbrace;
  &rbrace;);
&rbrace;);
</script>
