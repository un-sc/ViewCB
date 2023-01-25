export interface TestData {
    key: string;
    name: string;
    address: string;
    sex: 'male' | 'female';
    age: number;
    email: string;
}
export declare const data: TestData[];
export interface TestTreeData extends TestData {
    children?: TestTreeData[];
}
export declare const treeData: TestTreeData[];
