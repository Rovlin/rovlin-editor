
// export const TOOLBAR_TEST

import { toolbarInterface,toolsCommand } from "./toolbarInterface";

const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
}

export const TOOLS_COMMAND : toolsCommand = {
    "bold":"bold",
    "italic":"italic",
    "underline":"underline",
    "left":"justifyLeft",
    "center":"justifyCenter",
    "right":"justifyRight",
    "ordered-list":"insertOrderedList",
    "un-order-list":"insertUnorderedList",  
    "link":"createLink",
    "strike":"strikeThrough",
    "quote":"blockquote",
    "undo":"undo",
    "redo":"redo",
    "remove-format":"removeFormat",
    "font-size":"fontSize",
    "font-color":"foreColor",
    "hr":"insertHorizontalRule",
    "image":"insertImage"
}


export const TOOLBAR_DEFAULT : toolbarInterface = {
    iconPrefix: 'bi',
    tools: [
        {
            icon: 'bi-type-bold',
            type: 'bold',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['bold'])
        },
        {
            icon: 'bi-type-italic',
            type: 'italic',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['italic'])
        },
        {
            icon: 'bi-type-underline',
            type: 'underline',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['underline'])
        },
        {
            icon: 'bi-text-left',
            type: 'left',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['left'])
        },
        {
            icon: 'bi-text-center',
            type: 'center',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['center'])
        },
        {
            icon: 'bi-text-right',
            type: 'right',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['right'])
        },
        {
            icon: 'bi-list-ol',
            type: 'ordered-list',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['ordered-list'])
        },
        {
            icon: 'bi-list-ul',
            type: 'un-order-list',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['un-ordered-list'])
        },
        {
            icon: 'bi-link-45deg',
            type: 'link',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['link'])
        },
        {
            icon: 'bi-type-strikethrough',
            type: 'strike',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['strike'])
        },
        {
            icon: 'bi-blockquote-left',
            type: 'quote',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['quote'])
        },
        {
            icon: 'bi-arrow-counterclockwise',
            type: 'undo',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['undo'])
        },
        {
            icon: 'bi-eraser',
            type: 'remove-format',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['remove-format'])
        },
        {
            icon: 'bi-type',
            type: 'font-size',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['font-size'], value)
        },
        {
            icon: 'bi-fonts',
            type: 'font-color',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['font-color'], value)
        },
        {
            icon: 'bi-paint-bucket',
            type: 'font-background',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['font-background'], value)
        },
        {
            icon: 'bi-arrow-right',
            type: 'hr',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['hr'])
        },
        {
            icon: 'bi-image',
            type: 'image',
            action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND['image'], value)
        }
    ]
}


export const finalToolbar = (toolbarData : toolbarInterface) => {
    return {
        iconPrefix: toolbarData.iconPrefix,
        tools:toolbarData.tools.map(tool => {
            if(tool['action']) return tool
            else return {
                ...tool,
                action: (type: string, value?: string) => executeCommand(TOOLS_COMMAND[tool.type],value)
            }
        })
    }
}