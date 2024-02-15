export interface toolsInterface {
    icon: string;
    type: string;
    action?: (type:string) => void;
}

export interface toolbarInterface{
    iconPrefix: string,
    tools: toolsInterface[]
}

export  interface toolsCommand {
    [key: string]: string
}