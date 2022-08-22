import axios from "axios";
import { useEffect, useState } from "react";

export default function usePost() {
    const [posts, setPosts] = useState({post: [],error: '',loading: true,});
    const { loading, error, post } = posts;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const post = await axios.get('/posts');
                setPosts({ post, loading: false });
            } catch (err) {
                setPosts({ loading: false, error: error.message });
            }
        }
        fetchData();
    }, []);
    return [post, loading, error]
}