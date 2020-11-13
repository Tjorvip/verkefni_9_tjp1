import { el, element, formatDate } from './lib/utils.js';
import { init } from './lib/map.js';

document.addEventListener('DOMContentLoaded', async () => {
  init();
});
  
async function hi() {
  console.log('hi')
}
hi();
