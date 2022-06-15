declare const initialValue: ({
    type: string;
    children: {
        text: string;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        bold: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        italic: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        underline: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        strikethrough: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        text: string;
        code: boolean;
    }[];
    id: number;
} | {
    type: string;
    children: {
        type: string;
        children: {
            type: string;
            children: {
                type: string;
                children: {
                    text: string;
                }[];
            }[];
        }[];
    }[];
    id?: undefined;
})[];
export default initialValue;
