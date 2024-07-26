import { get } from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import {onClick} from 'https://jscroot.github.io/element/croot.js';
import { custom_menuBtn, navbarSupportedContent } from '/js/src/custom.js';



custom_menuBtn();
navbarSupportedContent();

onClick('popup-closer',onClosePopupClick);
onClick('insertmarkerbutton',onSubmitMarkerClick);
onClick('hapusbutton',onDeleteMarkerClick);
onClick('hitungcogbutton',getAllCoordinates);