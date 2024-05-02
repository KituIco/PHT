// import dependencies and setup express
const express = require('express');
const QRCode = require('qrcode');
const app = express();
const PORT = 3000;

// define qr generation route
app.get("/qrcode", (req, res) => {
  const url = 'https://example.com';
  QRCode.toDataURL(url,(err, qrCodeUrl) => {
    if (err) {
      // internal server error
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`
      <!DOCTYPE HTML>
      <html>
        <head>
          <title>QR Code Generator</title>
        </head>
        <body>
          <h1>QR Code Generator</h1>
          <img src="${qrCodeUrl}" alt="QR Code">
          <p>Scan the QR Code to visit the website.</p>
        </body>
      </html>
      `);
    }
  });
});



// start the server and listen to request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

