import { initNav } from './main/nav';
import { initContent } from './main/content';
import { initToc } from './main/toc';
import { initSearchInput } from './main/search-input';
import { initTab } from './main/tab';

import { setTheme } from './helpers/theme';
import { util } from './helpers/util';

setTheme();

initNav();
initContent();
initToc();

initSearchInput();
initTab();

util.hideLoading();
