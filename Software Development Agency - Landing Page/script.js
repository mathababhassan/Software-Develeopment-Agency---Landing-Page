const sections = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(
function(entries, appearOnScroll) 
{
    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            return;
        }
        else
        {
            entry.target.classList.add("appear");
        }
    });
}, 
appearOptions);

sections.forEach(section => {
    appearOnScroll.observe(section);
});