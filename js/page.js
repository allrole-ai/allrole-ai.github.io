// FAQ Accordion Script
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.querySelector('.accordion-header').addEventListener('click', () => {
    const content = item.querySelector('.accordion-content');
    const isOpen = content.style.display === 'block';
    
    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    
    // Toggle current item
    content.style.display = isOpen ? 'none' : 'block';
  });
});
