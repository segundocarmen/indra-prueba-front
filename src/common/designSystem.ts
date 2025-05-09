/* eslint-disable @typescript-eslint/no-explicit-any */
const replaces: any = { variant: 'backgroundColor' };

export const DesignSystem = {
    button: {
        variant: {
            black: '#03050f',
            red: '#ff1c44'
        },
        padding: {
            lg: '20px 40px',
            sm: '18px 40px',
            xs: '14px 32px'
        }
    }
};

export const GetDesignSystem = (params: string[] = []) => {
    const Obj: any = new Object();
    params.forEach((item: string) => {
        const elements = item.split('.');
        const res = elements.reduce(
            (acc: any, prop) =>
                typeof acc === 'object' && prop in acc ? acc[prop] : undefined,
            DesignSystem
        );
        const style = { [elements[1]]: res };
        const replaceKeys = Object.keys(style);
        const key: string = replaces[replaceKeys[0]]
            ? replaces[replaceKeys[0]]
            : replaceKeys[0];
        Obj[key] = res;
    });
    return Obj;
};
