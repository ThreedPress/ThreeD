import useSWR from "swr";
import { FC, useEffect, useState } from "react";

const API = "http://localhost:5000/projects";

const getData = async () => {
  const response = await fetch(API);
  return await response.json();
};

interface IProject {
  projectId: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  files: string[];
}

const FeedPage: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { data } = useSWR(API, getData);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <div>
      {projects &&
        projects.map(({ projectId, title, category, description, tags }) => (
          <div
            key={projectId}
            className="flex items-center justify-center w-full h-full py-5 bg-gray-800"
          >
            <div className="relative flex justify-center pl-1 transition duration-500 transform bg-gray-900 cursor-pointer rounded-xl hover:scale-105">
              <div className="z-10 pb-2 bg-gray-800 shadow-xl w-52 rounded-xl">
                <div className="relative">
                  {/* Images go here */}
                  <img
                    src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg"
                    className="object-cover max-h-60 rounded-t-xl"
                    alt=""
                  />
                </div>
                <div className="px-2 py-1">
                  <div className="pr-2 text-sm font-bold md:text-base">
                    {title}

                    {tags.map((tag) => (
                      <div className="flex py-2">
                        <div className="p-1 mr-2 text-xs font-medium text-gray-900 bg-gray-200 rounded-full">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ml-1 text-xs font-bold text-gray-600 md:text-sm">
                    {category}
                  </div>
                  <div className="flex py-2">
                    <p className="pb-1 text-xs text-gray-500 md:pb-2 md:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeedPage;
