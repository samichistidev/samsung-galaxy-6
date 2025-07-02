document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', function (e) {
        const url = a.getAttribute('href');

        // Only animate internal links
        if (url && url.endsWith('.html')) {
            e.preventDefault();
            document.startViewTransition(() => {
                window.location.href = url;
            });
        }
    });
});
