import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <li className="my-1">
      <div className="border-zinc-500 w-full rounded-lg border-b bg-gradient-to-r from-zinc-500 to-stone-500 p-1 shadow-lg  shadow-zinc-200/10 duration-300 hover:scale-[101%] hover:shadow-xl  hover:shadow-zinc-200/10">
        <div className="flex h-full w-full cursor-pointer flex-col justify-between gap-3 rounded-[4px] bg-skin-fill p-4">
          <a
            href={href}
            className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
          >
            {secHeading ? (
              <h2 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h2>
            ) : (
              <h3 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h3>
            )}
          </a>
          <Datetime datetime={pubDatetime} />
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
