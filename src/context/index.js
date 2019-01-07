import { createContext } from 'react';
export const appContext = createContext({
    showLayout: true,
    toggleShowLayout: () => {
        console.log('hi');
    },
});
//# sourceMappingURL=index.js.map