const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public/images/gallery');
const certDir = path.join(__dirname, 'public/images/certificates');

let images = [];

if (fs.existsSync(baseDir)) {
    fs.readdirSync(baseDir).forEach(cat => {
        const catDir = path.join(baseDir, cat);
        if (fs.statSync(catDir).isDirectory()) {
            fs.readdirSync(catDir).forEach(file => {
                images.push({
                    url: `/images/gallery/${cat}/${file}`,
                    category: cat,
                    caption: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Initiative`
                });
            });
        }
    });
}

if (fs.existsSync(certDir)) {
    fs.readdirSync(certDir).forEach(file => {
        images.push({
            url: `/images/certificates/${file}`,
            category: 'certificates',
            caption: 'Official Certificate'
        });
    });
}

fs.mkdirSync(path.join(__dirname, 'constants'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'constants/galleryImages.ts'), 'export const galleryImages = ' + JSON.stringify(images, null, 2) + ';\n');
console.log('Generated constants/galleryImages.ts with ' + images.length + ' images');
