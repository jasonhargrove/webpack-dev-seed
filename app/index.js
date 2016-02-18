/* Dev Environment */

if (process.env.NODE_ENV === 'development') {
  // Watch
  require('../build/index.html')
  require('./main.scss');
}

/* Components */

const component = require('./component');
const app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(component());
