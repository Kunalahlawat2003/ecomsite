

export interface iconProps {
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "custom";
    filled?: any
}

 export const sizeClasses = {
    "sm": "size-4 ",
    "md": "size-5 ",
    "lg": "size-6 ",
    "xl": "size-7 ",
    "2xl": "size-8 ",
    "3xl": "size-9 ",
    "4xl": "size-11",
    "custom": "xl:size-9 lg:size-12 md:size-10 size-8 "
}