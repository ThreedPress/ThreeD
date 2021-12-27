import { FC } from "react";
import { MdInsertDriveFile } from "react-icons/md";
import { IProject } from "./FeedPage";

const FeedCard: FC<IProject> = ({
  projectId,
  title,
  category,
  description,
  tags,
  files,
}) => {
  return (
    <div
      key={projectId}
      className="items-center justify-center w-full h-full mx-5 my-5 transition ease-in-out delay-150 group hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none"
    >
      <div className="max-w-sm bg-[#01252c] overflow-hidden rounded shadow-lg">
        <div className="relative">
          <img
            className="w-full px-3 pt-3"
            src="/test-preview.jpg"
            alt="Mountain"
          />
          <MdInsertDriveFile className="absolute top-0 right-0 w-8 h-8 transition delay-150 opacity-50 group-hover:opacity-100" />
          <p className="absolute top-2 right-4 text-slate-800">
            {files.length}
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="flex flex-row justify-between">
            <p className="flex-col mb-2 text-xl font-bold">{title}</p>{" "}
            <p className="flex-col text-base text-gray-400">{category}</p>
          </div>
          <p className="text-base text-gray-300">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags &&
            tags.map((tag: string) => (
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
