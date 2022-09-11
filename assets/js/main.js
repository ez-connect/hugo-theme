import { initNav } from './main/nav';
import { initContent } from './main/content';
import { initToc } from './main/toc';
import { initSearchInput } from './main/search-input';
import { initTab } from './main/tab';

import { setTheme } from './helpers/theme';

initNav();
initContent();
initToc();

initSearchInput();
initTab();

setTheme();
