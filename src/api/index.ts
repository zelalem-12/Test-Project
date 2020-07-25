
var baseUrl: string = "https://jsonplaceholder.typicode.com";

interface AlbumType {
    userId: number,
    id: number,
    title: string
};
interface PostType {
    id: number;
    title: string;
    body: string
}
type ApiDataType = AlbumType[] | PostType[] ;

const fetchData = async (path: string): Promise<ApiDataType> => {
    const response = await fetch(`${baseUrl}/${path}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { 
    fetchData
 };
    