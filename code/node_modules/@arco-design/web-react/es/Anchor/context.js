import { createContext } from 'react';
export default createContext({
    currentLink: '',
    onLinkClick: function () { },
    addLink: function () { },
    removeLink: function () { },
});
