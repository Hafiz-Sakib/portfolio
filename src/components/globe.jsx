import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "python",
  "cpp", // C++
  "c", // C
  "php",
  "flutter",
  "mysql",
  "mongodb",
  "graphql",
  "tailwindcss",
  "kubernetes",
  "jenkins",
  "webpack",
  // More additional icons
  "go", // Go language
  "ruby",
  "swift",
  "redux",
  "angular",
  "selenium",
  "electron",
  "heroku",
  "azure",
  "pandas",
  // New AI, Software Engineering, OS, Networking, and Architecture additions
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "keras",
  "numpy",
  "matplotlib",
  "jupyter",
  "linux",
  "ubuntu",
  "bash",
  "shell",
  "windows",
  "virtualbox",
  "wireshark",
  "redis",
  "apache",
  "tensorflowlite",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
