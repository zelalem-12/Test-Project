
var baseUrl: string = "https://jsonplaceholder.typicode.com";

interface AlbumType {
    userId: number,
    id: number,
    title: string
};
interface PostType {
    id?: number,
    userId: number,
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


const addData = async (path: string, post: PostType): Promise<ApiDataType> => {
    const response = await fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    });
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const deleteData = async (path: string): Promise<ApiDataType> => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};


export {
    fetchData,
    addData,
    deleteData
};

