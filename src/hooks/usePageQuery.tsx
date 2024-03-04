import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const page:string = query.get('page') || '1';

    return {
        page,
        prevPage: () => setQuery((prev: any) => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        }),
        nextPage: () => setQuery((prev: any) => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        }),
        resetPage: () => setQuery((prev: any) => {
            prev.set('page', '1')
            return prev
        })
    }
}

export {
    usePageQuery
}