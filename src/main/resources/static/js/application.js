const tagline = document.getElementById('tagline');
tagline.innerHTML = 'Added with JavaScript';

function toggleNavLinks (id) {
    var links = document.getElementById(id);
    if (links != null) {
        if (links.style.display === "block") {
            links.style.display = 'none';
        } else {
            links.style.display = 'block';
        }
        return false;
    }
}

// export default {
//     data() {
//         return {
//             isOpen: false;
//         }
//     },
// }

