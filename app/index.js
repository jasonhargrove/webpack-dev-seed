// Watch html in Webpack Dev Server
if (process.env.NODE_ENV === 'development') {
  require('../build/index.html')
}

import './main.scss';

const component = require('./component');
const app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());
