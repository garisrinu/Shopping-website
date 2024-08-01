<script>
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('searchInput');
        const itemsToSearch = document.querySelectorAll('.column'); // Assuming each product/item is in a column class

        searchInput.addEventListener('input', function() {
            const searchQuery = this.value.trim().toLowerCase();

            itemsToSearch.forEach(item => {
                const title = item.querySelector('h6').textContent.toLowerCase();
                if (title.includes(searchQuery)) {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });
</script>
