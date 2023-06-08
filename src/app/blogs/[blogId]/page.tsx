import axios from "axios";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

interface Props {
  params: {
    blogId: string;
  };
}

export default async function page({ params }: Props) {
  const link = `https://ajalovgitxohxesrkgch.supabase.co/storage/v1/object/public/blogs/${params.blogId}.md`;
  const { data } = await axios(link);

  return (
    <article className="p-8 flex justify-center">
      <div className="prose 2xl:prose-2xl xl:prose-xl lg:prose-lg">
        <Suspense>
          {/* @ts-expect-error Async Server Component*/}
          <MDXRemote source={data} />
        </Suspense>
      </div>
    </article>
  );
}