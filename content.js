// 引入QRCode庫
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
document.head.appendChild(script);

script.onload = function() {
  console.log('QRCode script loaded');

  // 創QRCode container
  const qrContainer = document.createElement('div');
  qrContainer.style.position = 'fixed';
  qrContainer.style.bottom = '10px';
  qrContainer.style.right = '10px';
  qrContainer.style.zIndex = '1000';
  qrContainer.style.backgroundColor = 'white';
  qrContainer.style.padding = '10px';
  qrContainer.style.border = '1px solid #ccc';
  document.body.appendChild(qrContainer);

  // 生成QRCode
  new QRCode(qrContainer, {
    text: window.location.href,
    width: 128,
    height: 128
  });
};

script.onerror = function() {
  console.error('Failed to load QRCode script');
}; 