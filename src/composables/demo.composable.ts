type Config = {
    props: Record<string, {
        foo: string;
        bar: number;
        baz: boolean;
    }>;
    slots: Record<string, {
        foo: string;
        bar: number;
        baz: boolean;
    }>;
    events: Record<string, {
        foo: string;
        bar: number;
        baz: boolean;
    }>
}

export function useDemo(config: Config) {
  // implementation
}
