export interface Filter {
    checkFilterIsSelected: (filter: unknown) => boolean;
    reset: () => void;
}
