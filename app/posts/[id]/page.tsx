import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {notFound} from "next/navigation";

// @ts-ignore
export default async function Page({params}) {
    const id = (await params).id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await response.json();



    if(!posts) {
        notFound()
    }

    return (
        <div>
            <h1>Posts Page</h1>
            {posts.length > 0 && posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; body: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
      <p>This is the posts page.</p>
    </div>
  );
}