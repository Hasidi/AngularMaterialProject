export interface IUser {
    Id: number;
    FirstName: string;
    LastName: string;
    Age: number;
}

export const usersMockData: IUser[] = [
    {Id: 1, FirstName: 'EladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladEladElad', LastName: 'Assis', Age: 32},
    {Id: 1, FirstName: 'Elad', LastName: 'Assis', Age: 32},
    {Id: 2, FirstName: 'Nethaniel', LastName: 'Hasidi', Age: 30},
    {Id: 3, FirstName: 'Racheli', LastName: 'Cohen', Age: 28},
    {Id: 4, FirstName: 'Idan', LastName: 'Hayoon', Age: 30},
    {Id: 5, FirstName: 'Boris', LastName: 'Vaser', Age: 29},
    {Id: 6, FirstName: 'Pavel', LastName: 'Medvedev', Age: 30},
    {Id: 7, FirstName: 'Dotan', LastName: 'Altras', Age: 31},
    {Id: 8, FirstName: 'Haim', LastName: 'Dahan', Age: 25},
    {Id: 9, FirstName: 'Daniel', LastName: 'Rahamim', Age: 30},
    {Id: 10, FirstName: 'Leon', LastName: 'Grushnko', Age: 34},
    {Id: 11, FirstName: 'Yoni', LastName: 'Feldman', Age: 35},



];

export const productsMockData: any[] = [
    {ProductId: 1, Type: 'Laptop', Brand: 'Lenovo', Item: 'Yoga 730', Size: '15 inch',
     CPU: 'i7-8565U Quad Core Processor', RAM: '16GB', HardDrive: '512 pcie ssd',
      GPU: 'NVIDIA® GeForce GTX 1050 4GB GDDR5', Weight: '1.89 kg', Battery: '3-Cell/51.5WH', OS: 'Windows 10 Home Edition'},
    {ProductId: 2, Type: 'Phone', Item: 'Samsung Galaxy Note 9'},
    {ProductId: 3, Type: 'Laptop', Item: 'Asus Zenbook Pro UX550'},
];
