const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const archiver = require('archiver');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Upload folder

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Serve the form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Handle form submission
app.post('/generate-zip', upload.fields([{ name: 'logo' }, { name: 'menu' }]), async (req, res) => {
    const { title, description, location, instagramLinks, whatsapp, facebook, sms, gpay, phonepe, paytm } = req.body;
    const logoFile = req.files['logo'] ? req.files['logo'][0] : null;
    const menuFile = req.files['menu'] ? req.files['menu'][0] : null;

    // Create a unique folder for each generated site
    const siteFolder = path.join(__dirname, 'generated_sites', title.replace(/\s+/g, '_'));
    fs.mkdirSync(siteFolder, { recursive: true });

    // Generate HTML from EJS
    const templateData = { title, description, location, instagramLinks, whatsapp, facebook, sms, gpay, phonepe, paytm, 
        logo: logoFile ? `assets/${logoFile.filename}.png` : '', 
        menu: menuFile ? `assets/${menuFile.filename}.pdf` : ''
    };

    const htmlContent = await ejs.renderFile(path.join(__dirname, 'template.ejs'), templateData);
    fs.writeFileSync(path.join(siteFolder, 'index.html'), htmlContent);

    // Create assets folder and move uploaded files
    const assetsFolder = path.join(siteFolder, 'assets');
    fs.mkdirSync(assetsFolder, { recursive: true });

    if (logoFile) {
        fs.renameSync(logoFile.path, path.join(assetsFolder, `${logoFile.filename}.png`));
    }
    if (menuFile) {
        fs.renameSync(menuFile.path, path.join(assetsFolder, `${menuFile.filename}.pdf`));
    }

    // Create a ZIP file
    const zipFileName = `${title.replace(/\s+/g, '_')}.zip`;
    const zipFilePath = path.join(__dirname, 'generated_sites', zipFileName);
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(siteFolder, false); // Add the entire site folder
    archive.finalize();

    output.on('close', () => {
        res.download(zipFilePath, (err) => {
            if (err) console.log('Download error:', err);
            fs.unlinkSync(zipFilePath); // Optional: Delete ZIP after download
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
