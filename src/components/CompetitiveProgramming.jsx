import React, { useEffect, useState } from "react";
import { Code, Award, Trophy } from "lucide-react";
import PropTypes from "prop-types";

const CompetitiveProgrammingCard = ({
  platform,
  handle,
  rating,
  rank,
  contribution,
  solvedEasy,
  solvedMedium,
  solvedHard,
  description,
  icon: Icon,
  profileUrl,
}) => (
  <a
    href={profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative bg-gray-800 rounded-xl shadow-[0px_0px_40px_#3498dbcc] transform transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_80px_#3498dbea] overflow-hidden"

    //  className="group relative bg-gray-800 rounded-xl shadow-[0px_0px_40px_rgba(0,0,255,0.5)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_80px_rgba(0,0,255,0.7)] overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 group-hover:opacity-30 transition-all duration-300" />
    <div className="relative p-8 space-y-6 bg-gray-900 rounded-xl">
      <div className="flex items-center space-x-4">
        <Icon className="w-16 h-16 text-blue-300" />
        <div>
          <h3 className="text-3xl font-bold text-white">{platform}</h3>
          <p className="text-sm text-gray-400">Handle: {handle}</p>
        </div>
      </div>
      <p className="text-gray-300 mt-4">{description}</p>
      <div className="text-gray-400 space-y-2">
        <p className="text-sm font-mono">Rating: {rating || "N/A"}</p>
        {rank && <p className="text-sm font-mono">Rank: {rank}</p>}
        {contribution && (
          <p className="text-sm font-mono">Contribution: {contribution}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-400">
            Easy Solved: {solvedEasy || 0}
          </p>
          <p className="text-sm text-gray-400">
            Medium Solved: {solvedMedium || 0}
          </p>
          <p className="text-sm text-gray-400">
            Hard Solved: {solvedHard || 0}
          </p>
        </div>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <Code className="w-5 h-5 text-gray-400" />
          <p className="text-sm text-gray-400">
            Total {solvedEasy + solvedMedium + solvedHard} Problems Solved
          </p>
        </div>
      </div>
    </div>
  </a>
);

CompetitiveProgrammingCard.propTypes = {
  platform: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  rating: PropTypes.string,
  rank: PropTypes.string,
  contribution: PropTypes.string,
  description: PropTypes.string.isRequired,
  solvedEasy: PropTypes.number,
  solvedMedium: PropTypes.number,
  solvedHard: PropTypes.number,
  icon: PropTypes.elementType.isRequired,
  profileUrl: PropTypes.string.isRequired,
};

const CompetitiveProgramming = () => {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    // Fetch Codeforces data
    fetch("https://codeforces.com/api/user.info?handles=hafiz_sakib")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setCodeforcesData({
            handle: data.result[0].handle,
            rating: data.result[0].rating.toString(),
            rank: data.result[0].rank,
            contribution: data.result[0].contribution,
          });
        }
      })
      .catch(() => console.log("Error fetching Codeforces data"));

    // Fetch LeetCode data
    fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query {
          matchedUser(username: "hafiz_Sakib") {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          const stats = data.data.matchedUser.submitStats.acSubmissionNum;
          const solvedEasy = stats.find(
            (item) => item.difficulty === "Easy"
          )?.count;
          const solvedMedium = stats.find(
            (item) => item.difficulty === "Medium"
          )?.count;
          const solvedHard = stats.find(
            (item) => item.difficulty === "Hard"
          )?.count;

          setLeetcodeData({
            handle: data.data.matchedUser.username,
            rating: `Solved: ${solvedEasy + solvedMedium + solvedHard}`,
            solvedEasy,
            solvedMedium,
            solvedHard,
          });
        }
      })
      .catch(() => console.log("Error fetching LeetCode data"));
  }, []);

  const platforms = [
    {
      icon: Code,
      platform: "Codeforces",
      handle: codeforcesData?.handle || "hafiz_sakib",
      rating: codeforcesData?.rating || "N/A",
      rank: codeforcesData?.rank || "N/A",
      contribution: codeforcesData?.contribution || "N/A",
      description:
        "Solve diverse algorithmic problems with a focus on contests.",
      solvedEasy: 311,
      solvedMedium: 192,
      solvedHard: 47,
      profileUrl: "https://codeforces.com/profile/hafiz_sakib",
    },
    {
      icon: Award,
      platform: "LeetCode",
      handle: leetcodeData?.handle || "hafiz_Sakib",
      rating: leetcodeData?.rating || "1532",
      rank: leetcodeData?.contribution || "N/A",
      contribution: leetcodeData?.contribution || "N/A",
      description: "Master DSA and problem-solving through challenges.",
      solvedEasy: leetcodeData?.solvedEasy || 210,
      solvedMedium: leetcodeData?.solvedMedium || 50,
      solvedHard: leetcodeData?.solvedHard || 12,
      profileUrl: "https://leetcode.com/hafiz_Sakib/",
    },
    {
      icon: Trophy,
      platform: "HackerRank",
      handle: "Hafiz_Sakib",
      rating: "Gold Badge in Python",
      rank: "N/A",
      contribution: "N/A",
      description: "Sharpen coding skills through well-curated challenges.",
      solvedEasy: 97,
      solvedMedium: 23,
      solvedHard: 3,
      profileUrl: "https://www.hackerrank.com/profile/Hafiz_Sakib",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="relative container mx-auto px-6 py-20">
        <div className="flex flex-col items-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
            Competitive Programming
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide">
            &quot;Pushing My limits with coding challenges!&quot;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {platforms.map((platform, index) => (
            <CompetitiveProgrammingCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
