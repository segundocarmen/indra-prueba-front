export interface RimacButtonVariants {
    variant?: 'black' | 'red';
    padding?: 'xs' | 'sm' | 'lg';
    text: string;
    controller: () => void;
    isSubmit?: boolean;
}
