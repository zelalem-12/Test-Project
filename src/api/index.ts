var baseUrl: string = "https://jsonplaceholder.typicode.com";

const fetchData = async (path: string) => {
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
    